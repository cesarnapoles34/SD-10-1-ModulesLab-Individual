export function costCalculator(amount) {
      const monto = Number(amount);
        const interes = monto * 0.01;
          return monto + interes + 3;
}