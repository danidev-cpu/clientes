function generarCombinacion() {
  let numeros = [];
  while (numeros.length < 6) {
    let num = Math.floor(Math.random() * 49) + 1;
    if (!numeros.includes(num)) numeros.push(num);
  }
  return numeros.sort((a, b) => a - b);
}

for (let i = 1; i <= 50; i++) {
  console.log(`Combinación ${i}: [${generarCombinacion().join(', ')}]`);
}
