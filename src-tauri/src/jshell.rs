use std::fmt::Display;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct Thing {
    id: u64 ,
    name: String,
}

impl Display for Thing {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "Thing id {}, name {}", self.id, self.name)
    }
}

fn thing_into_sh_string(thing: &Thing) -> String {
    format!("sh some-command --id {} --name {} --extra json", thing.id , thing.name)
}

pub fn things_into_commands(things: Vec<Thing>) -> Vec<String> {
    let commands = things.iter().map(|thing| thing_into_sh_string(thing.clone())).collect::<Vec<String>>();
    println!("{:?}", commands);
    return commands;
}

mod tests {
    use super::*;
    
    #[test]
    fn test_thing_into_sh_string() {
        let thing = Thing {
            id: 1,
            name: "test".to_string(),
        };
        let command = thing_into_sh_string(&thing);
        assert_eq!(command, "sh some-command --id 1 --name test --extra json");
    }
    
    #[test]
    fn test_things_into_commands() {
        let things = vec![
            Thing {
                id: 1,
                name: "test".to_string(),
            },
            Thing {
                id: 2,
                name: "test2".to_string(),
            },
        ];
        let commands = things_into_commands(things);
        assert_eq!(commands, vec![
            "sh some-command --id 1 --name test --extra json",
            "sh some-command --id 2 --name test2 --extra json",
        ]);
    }
}