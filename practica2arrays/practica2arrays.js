const frecuencias = Array(10).fill(0);

for (let i = 0; i < 10000; i++) {
  const num = parseInt(Math.random() * 10) + 1;
  frecuencias[num - 1] += 1;
}
console.log('Frecuencias:');
for (let i = 1; i < 10; i++) {
  console.log(`Número ${i}: ${frecuencias[i]}`);
}
