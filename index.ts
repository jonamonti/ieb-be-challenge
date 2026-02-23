import route from "./route";

// Example usage
const venues: number[] = [-50, 50, 150];
const target: number = 15;

const result = route(venues, target);

console.log("Venues:", venues);
console.log("Target:", target);
console.log("Result:", result);

if (result.length === 2) {
  const [i, j] = result;
  console.log(
    `Found pair: venues[${i}] + venues[${j}] = ${venues[i]} + ${venues[j]} = ${target}`,
  );
} else {
  console.log("No valid pair found");
}
