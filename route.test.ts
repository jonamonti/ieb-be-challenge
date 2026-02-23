import route from "./route";

const testFunction = (
  venues: number[],
  target: number,
  result: number[],
  hasResult: boolean,
): void => {
  console.log("Venues:", venues);
  console.log("Target:", target);
  console.log("Result:", result);
  // if there is no result, result array must be empty
  if (!hasResult) {
    if (result.length !== 0) throw new Error(`Expected [] but got ${result}`);
    console.log("✓ Correctly returned empty array (no solution)");
    return;
  }

  // check solution has only 2 values
  if (result.length !== 2)
    throw new Error(`Expected exactly 2 indexes but got ${result.length}`);

  // check indices are different
  const [index1, index2] = result;
  if (index1 === index2)
    throw new Error(`Indices must be different: [${index1}, ${index2}]`);

  // check indices are within venues array boundaries
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 > venues.length ||
    index2 > venues.length
  )
    throw new Error(
      `At least one index is out of venues array: [${index1}, ${index2}], venues array length: ${venues.length}`,
    );

  // check the sum equals the target
  const sum = venues[index1] + venues[index2];
  if (sum !== target) {
    throw new Error(
      `venues[${index1}] + venues[${index2}] = ${venues[index1]} + ${venues[index2]} = ${sum}, expected ${target}`,
    );
  }

  console.log(
    `✓ Valid solution: [${index1}, ${index2}] → ${venues[index1]} + ${venues[index2]} = ${target}`,
  );
};

// Test 1: Example from the challenge
console.log("\nTest 1: Basic example");
const result1 = route([120, 80, 40, 60], 100);
testFunction([120, 80, 40, 60], 100, result1, true);

// Test 2: No valid pair exists
console.log("\nTest 2: No valid pair exists");
const result2 = route([10, 20, 30], 100);
testFunction([10, 20, 30], 100, result2, false);

// Test 3: Multiple valid pairs (should return one)
console.log("\nTest 3: Multiple valid pairs exist");
const result3 = route([50, 50, 25, 75], 100);
testFunction([50, 50, 25, 75], 100, result3, true);

// Test 4: Target smaller than any individual venue
console.log("\nTest 4: Target smaller than the smallest venue's shares");
const result4 = route([100, 200, 300], 50);
testFunction([100, 200, 300], 50, result4, false);

// Test 5: Target is larger than any single venue's share
console.log("\nTest 5: Target is larger than any single venue's share");
const result5 = route([100, 200, 300], 500);
testFunction([100, 200, 300], 500, result5, true);

// Test 6: large input with result
console.log("\nTest 6: large input with result");
const largeInput = Array.from({ length: 10000 }, (_, index) => index);
const result6 = route(largeInput, 4530);
testFunction(largeInput, 4530, result6, true);

// Test 7: large input without result
console.log("\nTest 6: large input with result");
const result7 = route(largeInput, 20001);
testFunction(largeInput, 20001, result7, false);

console.log("\n=== END OF TESTING ===");

export default testFunction;
