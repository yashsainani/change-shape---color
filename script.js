const div = document.querySelector('.dynamic-div');
const shape = document.querySelector('.shape');

document.getElementById('color')
.addEventListener('click', () => {
    let colorCode = changeColor();
    navigator.clipboard.writeText(colorCode);
});

document.getElementById('shape')
.addEventListener('click', () => {
    let shapeGot = changeShape();
    navigator.clipboard.writeText(`clip-path: ${window.getComputedStyle(shape).clipPath}`);
});

document.getElementById('both')
.addEventListener('click', () => {
    changeColor();
    changeShape();
});

function getColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = '#';
    for (let i = 0; i < 6; i ++) {
        code += hex[Math.floor(Math.random() * 16)];
    }
    return code;
}

function getShape() {
    const shapes = ["frame", "triangle", "circle", "arrow", "star", "plus", "pentagon", "hexagon", "diamond", "trapezoid", "cross", "left-point", "right-point", "parallal", "cheg"];
    return shapes[Math.floor(Math.random() * 15)];
}

function changeColor() {
    let colorCode = getColor();
    div.style.backgroundColor = colorCode;
    return colorCode
}

function changeShape() {
    // shape.classList.forEach((className) => {
    //     if (className !== 'shape') shape.classList.remove(className);
    // });
    // shape.classList.add(getShape());
    shape.className = '';
    shape.classList.add('shape');
    let shapeGet = getShape();
    shape.classList.add(shapeGet);
    return shapeGet;
}