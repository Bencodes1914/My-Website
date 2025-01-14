document.querySelectorAll('.question-item').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.parentElement;
        
        // Close all other questions
        document.querySelectorAll('.question-container').forEach(item => {
            if (item !== container) {
                item.classList.remove('active');
            }
        });

        // Toggle current question
        container.classList.toggle('active');
    });
});
function switchTheme(lang) {
    // Remove active class from all buttons
    document.querySelectorAll('.theme-switch button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    document.getElementById(`${lang}Btn`).classList.add('active');

    // Here you can add your language switching logic
    if (lang === 'light') {
        // Switch content to Russian
        console.log('Switching to Light Theme');
        // You can add translations here
    } else {
        // Switch content to English
        console.log('Switching to Dark Theme');
        // You can add translations here
    }
}

const circle = document.querySelector('.cursor-follower');
        
document.addEventListener('mousemove', (e) => {
    const x = e.pageX - 10;
    const y = e.pageY - 10;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});

