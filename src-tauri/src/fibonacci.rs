
pub async fn fib_internal(n: u64) -> u64 {
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
