const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x_old = 0;
let y_old = 0;
canvas.width = 1000;
canvas.height = 1000;
for (let i = 0; i < 100; i++) {
    ctx.lineWidth = Math.random() * 10;
    ctx.moveTo(x_old, y_old);
    let x = Math.random() * 1000;
    let y = Math.random() * 1000;
    ctx.lineTo(x, y);
    x_old = x;
    y_old = y;
    ctx.stroke();
    ctx.strokeStyle = "#" + Math.round(Math.random() * 16777215).toString(16);
}