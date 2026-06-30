document.addEventListener("DOMContentLoaded", () => {
    
    // 1. АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ ПРИ СКРОЛЛЕ
    const animatedElements = document.querySelectorAll('.t-animate');
    
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс анимации, который прописан у тебя в стилях
                entry.target.classList.add('t-animate_started');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => animationObserver.observe(el));


    
});
