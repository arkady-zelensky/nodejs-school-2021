# Lecture 1

### :house: Home task

0. Write an `add()` function that will take any number of parameters in the next manner:
   ```js
   console.log(add(2)(5)(7)(1)(6)(5)(10)()); // 261
1. Write function, which takes two strings, and returns true if they are anagrams of one another.
2. Write the clone function so that it can clone deeply the object passed as a parameter.
3. Write a function-wrapper, that will cache the result of any other function.
   Look at the example of use case in pseudocode:
   ```js
   const add = (a, b) => a+b;
   const wrapper = (args) => {
     // implementation
   };
   const cachedAdd = wrapper(add);
   cachedAdd(2,2); // 4 calculated
   cachedAdd(5,8); // 13 calculated
   cachedAdd(2,2); // 4 from cache
   ```

### Useful links:
[GIT cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)

[GIT trainer](https://learngitbranching.js.org/)

[GIT workflow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)

[JavaScript book](https://learn.javascript.ru/)

[var vs let vs const](https://www.valentinog.com/blog/var/)
