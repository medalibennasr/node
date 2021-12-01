var sum = 0;

process.argv.slice(2).map((el) => (sum = sum + Number(el)));

console.log(sum);
