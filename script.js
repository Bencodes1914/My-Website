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
function switchLanguage(lang) {
    // Remove active class from all buttons
    document.querySelectorAll('.language-switch button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    document.getElementById(`${lang}Btn`).classList.add('active');

    // Here you can add your language switching logic
    if (lang === 'ru') {
        // Switch content to Russian
        console.log('Switching to Russian');
        // You can add translations here
    } else {
        // Switch content to English
        console.log('Switching to English');
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

const themeContainer = document.getElementById('themeContainer');
const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');

function toggleTheme(isDarkMode) {
    if (isDarkMode) {
        themeContainer.classList.add('dark-theme');
        lightModeBtn.classList.remove('light-mode-active');
        darkModeBtn.classList.add('dark-mode-active');
    } else {
        themeContainer.classList.remove('dark-theme');
        lightModeBtn.classList.add('light-mode-active');
        darkModeBtn.classList.remove('dark-mode-active');
    }
}

lightModeBtn.addEventListener('click', () => toggleTheme(true));
darkModeBtn.addEventListener('click', () => toggleTheme(true));
