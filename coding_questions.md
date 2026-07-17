# Coding Questions

### 1. Reverse a String

Write a function to reverse a string.

**Input:** "hello"
**Output:** "olleh"

---

### 2. Check Palindrome

Check if a number is a palindrome.

**Input:** 121
**Output:** True

---

### 3. Find Maximum Element

Find the maximum element in an array.

**Input:** [2, 5, 1, 9, 3]
**Output:** 9

---

### 4. Count Vowels in a String

Count number of vowels.

**Input:** "education"
**Output:** 5

---

### 5. Two Sum Problem

Find two numbers that add up to target.

**Input:** nums = [2,7,11,15], target = 9
**Output:** [0,1]

---

## Sample Solution (Python)

```python
# Reverse string
def reverse_string(s):
    return s[::-1]

# Palindrome
def is_palindrome(n):
    return str(n) == str(n)[::-1]

# Max element
def find_max(arr):
    return max(arr)

# Count vowels
def count_vowels(s):
    return sum(1 for c in s.lower() if c in 'aeiou')

# Two sum
def two_sum(nums, target):
    d = {}
    for i, num in enumerate(nums):
        if target - num in d:
            return [d[target - num], i]
        d[num] = i
```
