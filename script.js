let lastMouseX = -1;
let lastMouseY = -1;

document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('typewriter');
    const text = "Declining Productivity?";
    const speed = 85;
    let index = 0;
    let lastScrollTop = 0;
  
    function typeWriter() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      } else {
        separateAndAnimateWords();
      }
    }
  
    function separateAndAnimateWords() {
        const words = text.split(' ');
        const decliningSpan = document.createElement('span');
        decliningSpan.textContent = words[0];
        decliningSpan.style.position = 'absolute';
      
        const productivitySpan = document.createElement('span');
        productivitySpan.textContent = words[1];
        productivitySpan.style.position = 'absolute';
      
        textElement.appendChild(decliningSpan);
      
        setTimeout(() => {
          textElement.appendChild(productivitySpan);
          animateWords(decliningSpan, productivitySpan);
        }, 200); // Add a slight delay before animating the second word
      }
      
  
    function animateWords(decliningSpan, productivitySpan) {
      const finalDecliningPosition = '-100px'; // Adjust this value for desired left position
      const finalProductivityPosition = '0px'; // Adjust this value for desired left position (relative to declining)
  
      decliningSpan.animate({
        left: finalDecliningPosition
      }, { duration: 500 }).play();
  
      productivitySpan.animate({
        left: finalProductivityPosition
      }, { duration: 500 }).play();
    }
  
    typeWriter();
  });
  


const cursorDot = document.querySelector("[data-cursor-dot");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 250, fill: "forwards"}); 

}) 


  