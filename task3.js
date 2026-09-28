export function ageCalculator(year, month, day) {
  const hoy = new Date();
  const nacimiento = new Date(year, month - 1, day);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const difMes = hoy.getMonth() - nacimiento.getMonth();

  if (difMes < 0 || (difMes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}