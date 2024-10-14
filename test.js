function throttle(func, delay) {
    let lastTime = 0;
    let timeoutId;

    return function(...args) {
        const now = new Date().getTime();

        // Clear previous timeout if exists
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // If the time elapsed since the last call is greater than the delay, call the function immediately
        if (now - lastTime >= delay) {
            func.apply(this, args);
            lastTime = now;
        } else {
            // Otherwise, set a timeout to call the function after enough time has passed
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastTime = new Date().getTime();
            }, delay - (now - lastTime));
        }
    };
}