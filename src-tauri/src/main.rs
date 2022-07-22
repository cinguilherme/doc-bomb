#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod fibonacci;
mod jshell;

use tauri::command;

#[command]
async fn fib(n: u64) -> u64 {
  let res = fibonacci::fib_internal(n).await;
  println!("fib({}) = {}", n, res);
  return res
}

#[command]
fn greet(name: &str) -> String {
  println!("Hello, {}!", name);
  format!("Hello, {}!", name)
}

use jshell::Thing;

#[command]
fn jshell(list: Vec<Thing>) -> Vec<String> {
  jshell::things_into_commands(list)
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, fib, jshell])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
