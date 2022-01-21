B = document.getElementById("application")

let input_a = document.createElement("input");
input_a.setAttribute("id", "input_a");
B.append(input_a);

let input_b = document.createElement("input");
input_b.setAttribute("id", "input_b");
B.append(input_b);

let add = (a, b) => {
    return Math.floor(parseFloat(a) / parseFloat(b))
}

let payment = () => {
    let in_a = document.getElementById("input_a").value;
    let in_b = document.getElementById("input_b").value;
    console.log(add(in_a, in_b));
    let res = document.getElementById("result");
    res.innerText = add(in_a, in_b);
}

let result_button = document.createElement("button");
result_button.innerText = "=";
result_button.onclick = payment;
B.append(result_button);

let result_ti = document.createElement("answer");
result_ti.setAttribute("id", "result");
result_ti.innerText = 'Null';
B.append(result_ti)


_root_ = document.getElementById("application")
function size() {
    let size = {
        width: Math.round(Math.random() * 120),
        height: Math.round(Math.random() * 120),
        color: 'gold'
    }
    return `background-color: ${size.color}; width: ${size.width}px; height: ${size.height}px; position: absolute;margin-top: 60px; margin-left: 625px; border-style: solid; border-color: green`
}
let box = document.createElement("div");
let size_style = size();
box.setAttribute('id', 0);
box.setAttribute("style", size_style);
_root_.append(box)