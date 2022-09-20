# 4. Area of a triangle
**Created:** 20-09-2022  14:43

## Question
Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  [Go to the editor](https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR)  
[Click me to see the solution](https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php) 

## Solution 
**Công thức Heron:**
$$S = \sqrt{p(p-a)(p-b)(p-c)}$$
Trong đó:
	$S$ là diện tích hình tam giác
	$a, b, c$ là chiều dài 3 cạnh của hình tam giác
	$p$ là nửa chu vi hình chữ nhật

**Nửa chu vi hình tam giác:**
$$p = \frac{a+b+c}{2}$$