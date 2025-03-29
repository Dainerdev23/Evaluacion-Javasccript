function ejercicio17() {
    function squart(valor1, valor2) {
        return valor1 * valor1;
    }
    const resultado = `Resultados: ${squart(5, 10)}, ${squart(3, 7)}, ${squart(10, 2)}`;
    document.getElementById("resultado17").innerHTML = resultado;
}

function ejercicio18() {
    const nombre = prompt("Ingrese su nombre:");
    if (nombre) {
        document.getElementById("resultado18").innerHTML = `Hola ${nombre}`;
    } else {
        document.getElementById("resultado18").innerHTML = "No se ingresó ningún nombre.";
    }
}

function ejercicio19() {
    function adivinaElNumero() {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        let intentos = 5;

        alert("¡Bienvenido al Juego de Adivinar el Número!");
        alert("He generado un número entre 1 y 100. ¡Tienes 5 intentos para adivinarlo!");

        function jugar() {
            const intentoUsuario = parseInt(prompt("Introduce tu intento:"));

            if (isNaN(intentoUsuario)) {
                alert("Por favor, introduce un número válido.");
                return jugar();
            }

            intentos--;

            if (intentoUsuario === numeroAleatorio) {
                alert(`¡Felicidades! ¡Adivinaste el número ${numeroAleatorio} en ${5 - intentos} intentos!`);
            } else if (intentos === 0) {
                alert(`¡Se acabaron los intentos! El número era ${numeroAleatorio}.`);
            } else {
                const mensaje = intentoUsuario < numeroAleatorio ? "Demasiado bajo." : "Demasiado alto.";
                alert(`${mensaje} Te quedan ${intentos} intentos.`);
                jugar();
            }
        }

        jugar();
    }

    adivinaElNumero();
}