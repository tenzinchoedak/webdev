const inputA: Element | null = document.querySelector("#a");
const inputB: Element | null = document.querySelector("#b");

if(!(inputA instanceof HTMLInputElement)) {
  throw new Error("No input");
}

if(!(inputB instanceof HTMLInputElement)) {
  throw new Error("No input");
}

const conversionC = () => {
  const celsius = (parseInt(inputB.value) - 32 / 1.8).toString();
  return inputA.value = celsius;

}

const conversionF = () => {
  const fahrenheit = (parseInt(inputA.value) * 1.8 + 32).toString();
  return inputB.value = fahrenheit;
}
inputA.addEventListener("input", conversionF);
inputB.addEventListener("input", conversionC);
