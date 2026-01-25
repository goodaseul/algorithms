function solution(a, b) {
  const A = a;
  const B = b;

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  const gcd = a;
  const lcm = (A * B) / gcd;

  return [gcd, lcm];
}
