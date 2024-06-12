document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('typewriter');
    const text = "Declining Productivity?";
    const speed = 85;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            wrapWords();
            setTimeout(moveWords, 1000); // Wait 1 second before starting the move
        }
    }

    function wrapWords() {
        const innerHTML = textElement.innerHTML;
        textElement.innerHTML = `
            <span id="declining" class="move-to-top-left">${innerHTML.split(' ')[0]}</span>
            <span id="productivity" class="move-to-top-left-delayed">${innerHTML.split(' ')[1]}</span>
        `;
    }

    function moveWords() {
        const declining = document.getElementById('declining');
        const productivity = document.getElementById('productivity');

        declining.classList.add('move-to-top-left');

        // Adjust delay here
        setTimeout(() => {
            productivity.classList.add('move-to-top-left-delayed');
        }, 100); // 100ms delay between the two animations
    }

    typeWriter();
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 250, fill: "forwards" });
});

const element = document.querySelector('p');

element.addEventListener('mousedown', function (event) {
    // Prevent default selection behavior
    event.preventDefault();

    // Calculate delay (adjust as needed)
    const delay = 100; // milliseconds

    // Simulate selection after a delay
    setTimeout(function () {
        const selection = window.getSelection();
        const range = document.createRange();
        range.setStart(event.target, event.offsetX);
        range.setEnd(event.target, event.offsetX + event.target.textContent.length);
        selection.addRange(range);
    }, delay);
});
