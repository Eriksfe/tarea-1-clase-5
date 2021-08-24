const $botonCalcular = document.querySelector(".boton-calcular");
let inputSalario = document.querySelector(".valor-salario");
let imagen = document.querySelector(".imagen");
let textoImagen = document.querySelector(".texto-imagen");

$botonCalcular.onclick = function() {
  const MESES_EN_UN_ANIO = 12;
  let salarioMensual = Number(inputSalario.value) / MESES_EN_UN_ANIO;
  document.querySelector(".resultado-calculo").value = salarioMensual;
    if(salarioMensual <= 100000){
      imagen.setAttribute("src", "img/sad_penguin.gif");
      textoImagen.textContent = `Cobrás $ ${salarioMensual} por mes. Cómo hacés para vivir?`;
    } else if (salarioMensual > 100001 && salarioMensual < 499999) {
        imagen.setAttribute("src", "img/woman_meme.png")
        textoImagen.textContent = `Cobrás $ ${salarioMensual} por mes. Nada mal, eh!`;
    } else {
        imagen.setAttribute("src", "img/di_caprio.gif");
        textoImagen.textContent = `Cobrás $ ${salarioMensual} por mes. Qué hacés con tanta plata?`;
    }
  return false;
  }
  