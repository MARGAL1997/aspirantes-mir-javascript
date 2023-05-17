function join(array) {
    if (array.length === 0) {
      return "";
    }
    let cadena = "";
    for (let i = 0; i < array.length; i++) {
      cadena = cadena + array[i] + " ";
    }
    cadena = cadena.trim();
    return cadena;
  }
  console.log(join(["Hola", "mundo", "desde", "JavaScript"])); // "Hola mundo desde JavaScript"
  console.log(join([])); // ""
  console.log(join(["uno"])); // "uno"