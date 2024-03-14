// Unit Testing

// multiplication
// test multiplication of positive numbers
    expect multiplication(3,4) to be (12);

// test multiplication of negative numbers
    expect multiplication(-3,-4) to be (12);

// test multiplication of mixed numbers
    expect multiplication (-3,4) to be (-12);

// test multiplication of decimal numbers
    Expect multiplication(2.5, 4) to be equal to 10.0;

// test multiplication by zero
    expect multiplication (0,5) to be (0);

// test multiplication by a letter(non-numeric value) and number
    expect multiplication("a", 3) to be an error

// unexpected inputs such as a letter(non-numeric value) will result in an error 
// the function will return both positive and negative numbers
// the function will return decimal numbers

// concatOdd
// test should return an array
Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array

// test should return an array of odd numbers
Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be equal to [-1, 1, 3, 9, 15]

// test should return an empty array if both input arrays contain only even numbers
Expect concatOdds([2, 4, 6], [8, 10, 12]) to be an empty array

// test should return a sorted array of odd numbers
Expect concatOdds([1, 3, 5], [5, 3, 1]) to be equal to [1, 1, 3, 3, 5, 5]

// should return an array
// should return an array of only odd numbers
// odd numbers should be sorted and be in an ascending order
// should return an empty array if both inputs are even numbers

// functional test

// allow guest to check out (without an account) or as a logged in user
// they should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
 
// do not allow guest to check out if cart is empty 
// what needs to be shown to the user at each step of check out
// what behaviors of this feature does the prompt miss or gloss over
// choose between credit or debit
// have a promt to insure cart is correct before checkout