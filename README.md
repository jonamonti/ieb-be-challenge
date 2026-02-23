# IEB BE Challenge

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jonamonti/ieb-be-challenge.git
cd ieb-be-challenge
```

2. Install dependencies:

```bash
npm install
```

## How to Test

### Run All Tests

Execute the test suite which includes 7 comprehensive test cases:

```bash
npm test
```

This will run all tests in `route.test.ts` covering:

1. **Basic example**: `[120, 80, 40, 60]` with target `100` → finds `[1, 3]` (80 + 40 = 100)
2. **No valid pair**: `[10, 20, 30]` with target `100` → returns `[]`
3. **Multiple valid pairs**: `[50, 50, 25, 75]` with target `100` → finds one pair
4. **Target smaller than any element**: `[100, 200, 300]` with target `50` → returns `[]`
5. **Target larger than sum of two elements**: `[100, 200, 300]` with target `500` → finds `[0, 2]`
6. **Large input with result**: Array of 10,000 elements → efficiently finds solution
7. **Large input without result**: Large array → efficiently returns empty result

#### Expected Output

All tests should pass with checkmarks (✓) indicating valid solutions or correct empty results.

### Run Example

To see a live example of the function in action:

```bash
npm start
```

This runs `index.ts` with the example:

- Venues: `[-50, 50, 150]`
- Target: `15`
- Expected result: `[0, 1]` (because -50 + 50 = 15)

To test with different values, edit the `venues` and `target` variables at the top of `index.ts` and run `npm start` again.
