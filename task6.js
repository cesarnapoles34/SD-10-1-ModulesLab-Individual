export function rubricExcellent(score) {
  const puntaje = Number(score);
  if (puntaje > 8) {
    return "Excellent";
  }
  if (puntaje >= 5) {
    return "Pass";
  }
  return "Fail";
}
