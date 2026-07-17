# SQL Challenges

### 1. Find second highest salary

SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

---

### 2. Count employees per department

SELECT department, COUNT(*)
FROM employees
GROUP BY department;

---

### 3. Find duplicate records

SELECT name, COUNT(*)
FROM employees
GROUP BY name
HAVING COUNT(*) > 1;

---

### 4. Join example

SELECT e.name, d.department_name
FROM employees e
JOIN departments d
ON e.dept_id = d.id;

---

### 5. Find top 3 salaries

SELECT * FROM employees
ORDER BY salary DESC
LIMIT 3;
