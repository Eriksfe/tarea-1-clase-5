let encabezadoPagina = document.querySelector("header");
let nuevoTitulo = document.createElement("h1");
let textoTitulo = document.createTextNode("Calculadora de salarios");
let titulo = document.querySelector("title");
let cuerpoPagina = document.querySelector("body");
let $botonCalcular = document.createElement("button");
let primerFormulario = document.createElement("form");
let segundoFormulario = document.createElement("form");
let nuevaLabel = document.createElement("label");
let primerInput = document.createElement("input");
let segundoInput = document.createElement("input");
let primerParrafo = document.createElement("p");
let segundoParrafo = document.createElement("p");
let textoSegundoParrafo = document.createTextNode("");
let textoParrafo = document.createTextNode("Tu salario mensual es: ");
let image = document.createElement("img");


titulo.textContent = "Calculadora de salarios";


nuevoTitulo.appendChild(textoTitulo);
encabezadoPagina.appendChild(nuevoTitulo);
nuevaLabel.appendChild(primerInput);
nuevaLabel.appendChild($botonCalcular);
primerFormulario.appendChild(nuevaLabel);
segundoFormulario.appendChild(segundoInput);
cuerpoPagina.appendChild(primerFormulario);
primerParrafo.appendChild(textoParrafo);
cuerpoPagina.appendChild(primerParrafo);
cuerpoPagina.appendChild(segundoFormulario);
cuerpoPagina.appendChild(image);
segundoParrafo.appendChild(textoSegundoParrafo);
cuerpoPagina.appendChild(segundoParrafo);


primerInput.setAttribute("type", "number");
primerInput.setAttribute("id", "salario-anual");
segundoInput.setAttribute("type", "number");
segundoInput.setAttribute("class", "resultado");
segundoInput.setAttribute("readonly", "");
$botonCalcular.innerText = "Calcular";
nuevaLabel.setAttribute("for", "salario");


nuevoTitulo.style.fontSize = "25px";
nuevoTitulo.style.textAlign = "center";
nuevoTitulo.style.fontFamily = "sans-serif";
nuevoTitulo.style.backgroundColor = "gray";
primerFormulario.style.textAlign = "center";
segundoFormulario.style.textAlign = "center";
primerParrafo.style.textAlign = "center";
primerParrafo.style.fontFamily = "sans-serif";
primerParrafo.style.fontSize = "13px";
image.style.display = "block";
image.style.marginLeft = "auto";
image.style.marginRight = "auto";
image.style.maxWidth = "230px";
image.style.maxHeight = "95px";
image.style.width = "auto";
image.style.height = "auto";
segundoParrafo.style.fontFamily = "sans-serif";
segundoParrafo.style.textAlign = "center";


$botonCalcular.onclick = function() {
  const MESES_EN_UN_ANIO = 12;
  let salarioMensual = Number(primerInput.value) / MESES_EN_UN_ANIO;
  document.querySelector(".resultado").value = salarioMensual;
    if(salarioMensual <= 100000){
      image.setAttribute("src", "img/sad_penguin.gif");
      textoSegundoParrafo.textContent = `Cobrás $ ${salarioMensual} por mes. Cómo hacés para vivir?`
    } else if (salarioMensual > 100001 && salarioMensual < 499999) {
        image.setAttribute("src", "img/woman_meme.png")
        textoSegundoParrafo.textContent = `Cobrás $ ${salarioMensual} por mes. Nada mal, eh!`
    } else {
        image.setAttribute("src", "img/di_caprio.gif");
        textoSegundoParrafo.textContent = `Cobrás $ ${salarioMensual} por mes. Qué hacés con tanta plata?`
    }
  return false;
  }
  