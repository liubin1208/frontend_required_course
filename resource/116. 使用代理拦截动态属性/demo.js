function createProxy(values = []) {
  return new Proxy(
    {},
    {
      get(target, p) {
        if (p === Symbol.toPrimitive) {
          return () => values.reduce((a, b) => a + b, 0);
        }
        return createProxy([...values, +p]);
      },
    }
  );
}

const add = createProxy();

const r1 = add[1][2][3] + 4; // 期望结果 10
const r2 = add[10][20] + 30; // 期望结果 60
const r3 = add[100][200][300] + 400; // 期望结果 1000
console.log(r1);
console.log(r2);
console.log(r3);
