let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=1000,height=600,left=100,top=100`;

function openWindow(url) {
    window.open(url, "test", params);
}

button1.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la acción predeterminada
    openWindow("./cards_navegadores/"); // Llama a la función con el enlace deseado
});

button2.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la acción predeterminada
    openWindow("./eetp462/"); // Llama a la función con el enlace deseado
});

button3.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la acción predeterminada
    openWindow("./ahorcado/"); // Llama a la función con el enlace deseado
});

button4.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la acción predeterminada
    openWindow("./tateti/"); // Llama a la función con el enlace deseado
});

button5.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la acción predeterminada
    openWindow("./memorando/"); // Llama a la función con el enlace deseado
});

button6.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la acción predeterminada
    openWindow("./adivina_bandera/"); // Llama a la función con el enlace deseado
});