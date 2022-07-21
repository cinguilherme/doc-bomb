#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::command;

fn fib_internal(n: u64) -> u64 {
  // fibonacci tail recursive 
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
fn fib(n: u64) -> u64 {
  fib_internal(n)
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
