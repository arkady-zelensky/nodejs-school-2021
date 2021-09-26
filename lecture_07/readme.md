# Lecture 7

### :house: Home task

0. Write an `add()` function that will take any number of parameters in the next manner:
   ```js
   console.log(add(2)(5)(7)(1)(6)(5)(10)()); // 36
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
   
Task 0
Categories
- name
- description

Concerts
- name
- duration
- description
- address
- category
- age limit

Category_Concerts
- ^category
- ^concert

Visitors (Concerts 1:M Visitors)
- email
- name
- age

Task 1
________________________________
Users
- s:email
- s:name
- s:avatar_url
- s:gender

Channels (User 1:1 Channel)
- s:photo_url
- s:description

Subscriptions (User M:M Channel)
- user
- channel
- SubscriptionLevel
- d:subscribe_date

Videos (Channel 1:M Videos)
- s:preview_url
- s:file_url
- s:title
- s:description
- n:duration

Comments (Videos 1:M Comments, User 1:M Comments)
- ^user
- ^video
- s:text

Reactions (Reactions 1:1 Video, Reactions 1:1 User)
- ^user
- ^video
- s:isLike

Watches (Watches 1:1 Video, Watches 1:1 User)
- ^user
- ^video
- d:date


### Useful links:
[Database design](https://metanit.com/sql/tutorial/1.1.php)

[SQL joins (+ comments)](https://habr.com/ru/post/448072/)

[Normalization forms](https://www.guru99.com/database-normalization.html)

[Normalization and denormalization](https://techdifferences.com/difference-between-normalization-and-denormalization.html)




