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