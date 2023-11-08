{
    // Statics in OOP
    class Counter {
        static count: number = 0;
        increment() {
            return (Counter.count += 1);
        }

        static decrement() {
            return (Counter.count -= 1);
        }
    }

    const result = new Counter();
    console.log(result.increment());
    console.log(Counter.decrement());

    //
}
