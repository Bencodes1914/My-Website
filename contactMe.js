const circle = document.querySelector('.cursor-follower');
        
document.addEventListener('mousemove', (e) => {
    const x = e.pageX - 10;
    const y = e.pageY - 10;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});