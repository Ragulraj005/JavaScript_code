function fib(n) {
  let seq = [0, 1];

  for (let i = 2; i < n; i++) {
    const next = seq[i - 1] + seq[i - 2];
    seq.push(next);
  }

  return seq;
}

let number = 10;
console.log(`The fib sequence of ${number}:`, fib(number));
