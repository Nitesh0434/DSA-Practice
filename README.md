# DSA-Practice

Welcome to my **Data Structures and Algorithms (DSA) practice repository**!  
This repository contains solutions to problems from **NeetCode 150** and **LeetCode** to improve my problem-solving skills.

---

## 📂 Table of Contents (NeetCode 150 Categories)

1. [Arrays & Hashing](#arrays--hashing)
2. [Two Pointers](#two-pointers)
3. [Sliding Window](#sliding-window)
4. [Stack](#stack)
5. [Binary Search](#binary-search)
6. [Linked List](#linked-list)
7. [Trees](#trees)
8. [Tries](#tries)
9. [Backtracking](#backtracking)
10. [Heap / Priority Queue](#heap--priority-queue)
11. [Graphs](#graphs)
12. [1D Dynamic Programming](#1d-dynamic-programming)
13. [Intervals](#intervals)
14. [Greedy](#greedy)
15. [Advanced Graphs](#advanced-graphs)
16. [2D Dynamic Programming](#2d-dynamic-programming)
17. [Bit Manipulation](#bit-manipulation)
18. [Math & Geometry](#math--geometry)

---

## 📊 Progress (Arrays & Hashing)
- **Total Solved:** 4 / 9  
  - Easy: 3 ![Easy](https://img.shields.io/badge/Easy-3-brightgreen)  
  - Medium: 1 ![Medium](https://img.shields.io/badge/Medium-1-yellow)

---

## 🧩 Arrays & Hashing

### 1. Valid Anagram
- **Difficulty:** ![Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
- **Problem Link:** [NeetCode](https://neetcode.io/problems/is-anagram?list=neetcode150)
- **Approach:**  
  - Use a hash map (array) to count character frequencies in `s`.  
  - Decrease count for each character in `t`.  
  - If all counts reduce to zero → strings are anagrams.  
- **Time Complexity:** O(n + m)  
- **Space Complexity:** O(1)  
- **Solution:** [anagram.js](./Arrays/anagram.js)

### 2. Contains Duplicate
- **Difficulty:** ![Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
- **Problem Link:** [NeetCode](https://neetcode.io/problems/duplicate-integer?list=neetcode150)
- **Approach:**  
  - Use a `Set` to track seen numbers.  
  - Return true if a duplicate is found, otherwise false.  
- **Time Complexity:** O(n)  
- **Space Complexity:** O(n)  
- **Solution:** [duplication.js](./Arrays/duplication.js)

### 3. Group Anagrams
- **Difficulty:** ![Medium](https://img.shields.io/badge/Difficulty-Medium-yellow)
- **Problem Link:** [NeetCode](https://neetcode.io/problems/group-anagrams?list=neetcode150)
- **Approach:**  
  - Count character frequencies for each word and use as a key in a `Map`.  
  - Group words with the same key together.  
- **Solution:** [groupanagram.js](./Arrays/groupanagram.js)

### 4. Two Sum
- **Difficulty:** ![Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
- **Problem Link:** [LeetCode](https://leetcode.com/problems/two-sum/)
- **Approach:**  
  - Use a `Map` to store seen numbers and their indices.  
  - For each number, check if `target - current` exists.  
  - Return indices if found.  
- **Time Complexity:** O(n)  
- **Space Complexity:** O(n)  
- **Solution:** [twosum.js](./Arrays/twosum.js)

---

## 🛠️ Tools & Technologies
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Neovim](https://img.shields.io/badge/Neovim-57A143?style=for-the-badge&logo=neovim&logoColor=white)](https://neovim.io/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![Fedora](https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white)](https://getfedora.org/)

---

## 📌 How to Use

1. Clone the repository:

```bash
git clone https://github.com/Nitesh0434/DSA-Practice.git
# Fri Sep 12 11:11:44 PM +0545 2025
