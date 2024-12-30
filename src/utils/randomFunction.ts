export default function randomFunction(max:number, min=1) {
  return Math.floor(Math.random() * (max +1- min) + min)
}
