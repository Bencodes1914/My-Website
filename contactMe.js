// Added a cursor follower
const circle = document.querySelector('.cursor-follower');
    
document.addEventListener('mousemove', (e) => {
  circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});