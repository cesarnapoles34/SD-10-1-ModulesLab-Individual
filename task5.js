export function rubricPassFail(score) {
  const puntaje = Number(score);
  if (puntaje >= 5) {
    return "Pass";
  }
  return "Fail";
}