let imagenes = [];
imagenes["Vacana"] = "images/vaca.png";
imagenes["Pollozo"] = "images/pollo.png";
imagenes["Tocinauro"] = "images/cerdo.png";

let coleccion = [];

coleccion.push(new Pakiman("Vacana", 150, 70, "Tierra"));
coleccion.push(new Pakiman("Pollozo", 80, 120, "Aire"));
coleccion.push(new Pakiman("Tocinauro", 120, 90, "Agua"));

for (var elbicho of coleccion) {
  elbicho.mostrar();
}

