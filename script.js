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

const circle = document.querySelector('.cursor-follower');
        
document.addEventListener('mousemove', (e) => {
    const x = e.pageX - 10;
    const y = e.pageY - 10;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun-icon-clip-art-free-png"
    }else{
        icon.src = "pngtree-vector-new-moon-icon-png-image_943866.jpg";
    }
}

