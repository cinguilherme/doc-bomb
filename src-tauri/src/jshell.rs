use std::fmt::Display;
use serde::Deserialize;
use serde::Serialize;

#[derive(Debug, Deserialize)]
pub struct Thing {
    id: u64 ,
    name: String,
}

#[derive(Debug, Serialize)]
pub struct ShCommand {
    pub id: u64,
    pub command: String
}

impl Display for Thing {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "Thing id {}, name {}", self.id, self.name)
    }
}

fn thing_into_sh_string(thing: &Thing) -> String {
    format!("sh some-command --id {} --name {} --extra json", thing.id , thing.name)
}

fn thing_into_command(thing: &Thing) -> ShCommand {
    ShCommand {
        id: thing.id,
        command: thing_into_sh_string(thing)
    }
}

pub fn things_into_commands(things: Vec<Thing>) -> Vec<ShCommand> {
    things.iter().map(|thing| thing_into_command(thing.clone())).collect::<Vec<ShCommand>>()
}

#[cfg(test)]
#[allow(non_snake_case)]
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
    fn test_thing_into_command() {
        let thing = Thing {
            id: 1,
            name: "test".to_string(),
        };
        let command = thing_into_command(&thing);
        assert_eq!(command.id, 1);
        assert_eq!(command.command, "sh some-command --id 1 --name test --extra json");
    }
}