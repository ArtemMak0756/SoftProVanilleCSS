document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(
        ".progress-ring__circle1, .progress-ring__circle2, .progress-ring__circle3, .progress-ring__circle4"
    );
    const observerOptions = {
        root: null, // Следим за элементами относительно окна просмотра
        rootMargin: "0px", // Без дополнительных отступов
        threshold: 0.1 // Элемент считается видимым, если 10% его площади находится в зоне видимости
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const index = Array.from(circles).indexOf(circle);
                // Добавляем задержку для каждого круга
                setTimeout(() => {
                    circle.classList.add("active");
                }, 500 + index * 1);
                observer.unobserve(circle); // Перестаем наблюдать за элементом после срабатывания
            }
        });
    }, observerOptions);
    circles.forEach((circle) => observer.observe(circle));
});
