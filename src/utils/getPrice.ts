import getWeight from "./getWeight";

export default function getPrice(weight: number, total: number) {
  return total / getWeight(weight);
}
