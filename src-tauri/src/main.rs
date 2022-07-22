#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::fmt::{Debug, Display};
use tauri::command;

async fn fib_internal(n: u64) -> u64 {
  // fibonacci tail recursive 

  //sleep thread for 500ms
  std::thread::sleep(std::time::Duration::from_millis(500));

  fn fib_tail(n: u64, a: u64, b: u64) -> u64 {
    if n == 0 {
      a
    } else {
      fib_tail(n - 1, b, a + b)
    }
  }
  fib_tail(n, 0, 1)
}

#[command]
async fn fib(n: u64) -> u64 {
  let res = fib_internal(n).await;
  println!("fib({}) = {}", n, res);
  return res
}

#[command]
fn greet(name: &str) -> String {
  println!("Hello, {}!", name);
  format!("Hello, {}!", name)
}

use serde::Deserialize;

#[derive(Debug, Deserialize)]
struct Thing {
  id: u64 ,
  name: String,
}

impl Display for Thing {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    write!(f, "Thing id {}, name {}", self.id, self.name)
  }
}

fn display_things(things: Vec<Thing>) {
  for thing in things {
    println!("{}", thing);
  }
}

#[command]
fn jshell(list: Vec<Thing>) -> String {
  let disp = list.iter().map(|t| t.to_string()).collect::<Vec<String>>().join("\n");
  println!("{}", disp);
  return "hello".to_string();
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, fib, jshell])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
