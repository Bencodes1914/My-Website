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


 // Add console.log to verify script is running
 console.log('Script is running');

 const circle = document.querySelector('.cursor-follower');
 
 // Add console.log to verify circle is found
 console.log('Circle element:', circle);

 document.addEventListener('mousemove', (e) => {
     // Add console.log to verify mouse movement is detected
     console.log('Mouse moved:', e.clientX, e.clientY);
     
     // Added small offset so circle doesn't center on cursor
     const x = e.clientX - 10;
     const y = e.clientY - 10;
     circle.style.transform = `translate(${x}px, ${y}px)`;
 });