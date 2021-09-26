# Lecture 7

### :house: Home task


0. Write an SQL statement to define tables for the next entities:
   - Concerts (name, duration, description, address, age limit, price)
   - Visitors (email, name, age)
   - Categories (name, description).
   
   Notes:
   
   One concert may be related to different categories.
   
1. Select all users with theirs channels and return next information, sorted by channel's creation date (newer at the top):

   user id, user name, user avatar, channel photo, channel description, channel creation date.
2. Select information about the most liked video ever.
3. Select videos from subscriptions for user Stephanie Bulger, ordered by publish date (newer at the top) and return next information:

   video id, video title, video preview, video duration, video publish date.
4. Select information of channel with id '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76' and count of its subscribers.
5. Select the most rated (likes and dislikes) top 10 videos starting from the September which has more than 4 likes, sorted by count of likes (the most at the top).
6. Select subscriptions for user Ennis Haestier and return next information:

   channel (user) name, channel (user) avatar, channel photo, channel description, subscription level, subscription date.

   Information should be sorted firstly by subscription level and secondly by subscription date:

   order for subscription levels from top to bottom: vip, follower, fan, standard; subscription date from newer to older.
   

### Useful links:
[Database design](https://metanit.com/sql/tutorial/1.1.php)

[PostgreSQL tutorial](https://metanit.com/sql/postgresql/1.1.php)

[SQL joins (+ comments)](https://habr.com/ru/post/448072/)

[Normalization forms](https://www.guru99.com/database-normalization.html)

[Normalization and denormalization](https://techdifferences.com/difference-between-normalization-and-denormalization.html)




