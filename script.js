let lista = document.getElementById("lista");
let input = document.getElementById("tarea");

function agregar() {
  let texto = input.value;
  if (texto == "") {
    alert("Escribe una tarea");
    return;
  }

  let item = document.createElement("li");
  item.textContent = texto + " ";

  let boton = document.createElement("button");
  boton.textContent = "Borrar";
  boton.onclick = function () {
    lista.removeChild(item);
  };

  item.appendChild(boton);
  lista.appendChild(item);
  input.value = "";
}