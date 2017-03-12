export default function tempConverter(value){
  let celsius:number,
      fahrenheit:number = value;
  celsius = (fahrenheit - 32) * 5 / 9;

  return celsius;
}
