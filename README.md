# Green Earth
---

#### 1) What is the difference between var, let, and const?

Ans: **var:** 1.Global, if not within a function, or function-scoped. It "leaks" outside of blocks like if or for since it is not block-scoped.
2.Hoisted to the top of its scope and initialized as undefined.
3.Can be re-declared and reassigned.

**let:** 1.scoped in blocks. Exists exclusively inside the nearest { }.
2.let and const: Hoisted but not initialized.
3.Cannot be re-declared in the same scope, but can be reassigned.

**const:** 1.Cannot be re-declared or reassigned.
2. Block scoped (like let).

#### 2) What is the difference between map(), forEach(), and filter()? 

Ans: 1.**map()**: create a function on an array and returns a new array.
2.**forEach()**: make a function on an array, but does not return anything. 
3.**filter()**: Creates a new array with elements that pass a condition .filter some element from an array and return a new array.

#### 3) What are arrow functions in ES6?

Ans: Arrow functions (=>) were introduced in ES6 as a shorter, easy and cleaner way to write functions. 
Ex: `const square = x => x * x; 
console.log(square(4));` or `const square = x => { return x * x };`

#### 4) How does destructuring assignment work in ES6?

Ans: ES6's destructuring assignment feature allows to break down array values or object properties into separate variables.  It eliminates repetition and makes the code cleaner.

Ex: `const numbers = [2, 5, 8]

const [x, y, z] = numbers;

console.log(x);
console.log(y);
console.log(z);
`

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Ans: Template literals, also known as template strings, are a new feature in ES6 that provide a more flexible and readable way to work with strings. They are enclosed by backticks (``). It can do dynamic. It makes the intent clearer and the code much more readable. 

concatenation method: 1. use plus (+) symbol & leading to a long chain of operators and quotation marks. 
2. Multi-line strings require the \n newline character, which can be cumbersome to manage. With template literals, you simply press enter.








## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Repository:** YOUR_REPO_URL_HERE  

---