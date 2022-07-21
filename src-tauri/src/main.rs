#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::command;

fn fib_internal(n: u64) -> u64 {
  if n == 0 {
    0
  } else if n == 1 {
    1
  } else {
    fib_internal(n - 1) + fib_internal(n - 2)
  }
}

#[command]
fn fib(n: u64) -> String {
  println!("fib({})", n);
  let res = fib_internal(n);
  res.to_string()
}

#[command]
fn greet(name: &str) -> String {
  println!("Hello, {}!", name);
  format!("Hello, {}!", name)
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, fib])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
