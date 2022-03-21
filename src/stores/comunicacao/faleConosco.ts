export const nameIsValid = (n: string) => {
  if (!n || n.length < 2 || /[^a-z\s]/i.test(n)) return false;
  return true;
}
export const emailIsValid = (e: string) => {
  if (!e || e.length < 9 || !/@/.test(e)) return false;
  return true;
}
export const phoneIsValid = (p: string) => {
  if (!p || p.length < 11 || !/[0-9]/i.test(p)) return false;
  return true;
}