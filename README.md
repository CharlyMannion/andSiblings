# AND-Siblings Tech Test 

## Description
A practice tech test solution to find the permutations (or AND-Siblings) of a string of integers, returned as a string.

## Exercise
Two non-negative integers are called AND-Siblings if they can be obtained by each other by rearranging the digits of their decimal representations. Write a function that, given any String input, returns all the distinct AND-Siblings that can be formed by the positive integers that can be found on it in descending order. Please keep in mind the efficiency of your algorithm when writing the solution.

### For example:
* If the input provided is: “236”, then your solution should return &quot;632,623,362,326,263,236&quot;as these are all the combination that can be made with integers that the string contains
* If the input provided is: “A 3B2 C6D”, then your solution should return
&quot;632,623,362,326,263,236&quot; as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to
obtain the correct solution
* If the input provided does not contain any integers: “ABC”, then your solution should return the appropriate error exception message.
