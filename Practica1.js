
function generarCombinacion() {
  const numeros = [];
  while (numeros.length < 6) {
    const num = parseInt(Math.random() * 49) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }
  numeros.sort((a, b) => a - b);
  return numeros;
}
function mostrarCombinaciones(n) {
  for (let i = 1; i <= n; i++) {
    const combinacion = generarCombinacion();
    console.log(`Combinación ${i}: [${combinacion.join(', ')}]`);
  }
}
mostrarCombinaciones(50);
