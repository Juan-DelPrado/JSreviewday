/ //Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).
//
// //Hint:
// //you do not need any loops
//
// Var testWord1 = "nomad"
// //expected output = "no nomad is not a palindrome"
//
// STRETCH: copy / paste and refactor to account for sentences and capital letters. Do not worry about punctuation.
//
// var testSentence1 = "Nomad DaMon"
// // expected output:  "yes Nomad DaMon is a palindrome"
//
// function isPalindrome(couldBe)
// {
//   var stringSplit = couldBe.split("");
//
//   var reverseArray = stringSplit.reverse();
//
//   var joinArray = reverseArray.join("");
//
//   if (joinArray === couldBe){
//     console.log("This is a palindrome");
//   } else {
//     console.log("This is not a palindrome");
//   }
// }
//
// isPalindrome("hih")

//
//
//
// //Write a function that takes in two arrays (of numbers) and checks for duplicates.  The function should output a new array without duplicates
//
// // hint: you will need a loop
// // hint: use the .includes() method
//
// var a = [1, 2, 3, 30, 17];
// var b = [2, 30, 1, 15, ];
// //expected output [1, 3, 2,  17, 15]
//
// function clearDuplicates(array1, array2) {
//  concat arrays together
//  sort new array
//  iterate through new array {
//  compare each pair and eliminate any duplicates being compared
//  return new array

// testArray1 = [1, 2, 3, 30, 17];
// testArray2 = [2, 30, 1, 15, 7];
//
// function compareArrays(array1, array2) {
//   var array3 = []
//   var array4 = []
//   for (i = 0; i < array1.length; i++) {
//    if (array2.includes(array1[i]) === false) {
//      array3.push(array1[i])
//    }
//   } array4 = array3.concat(array2)
//    return array4
// }
// console.log(compareArrays(testArray1, testArray2))

//
// STRETCH:  copy/paste and refactor function to take in more than two arrays.
//
// var a = [1, 2, 3, 30, 17];
// var b = [2, 30, 1, 15, ];
// var c = [2, 10, 19, 1, 3]
// var d = [1, 3, 40, 32, 3]

//Create a function that takes in a sentence and returns only the consonants (removes the vowels).

// hint: you will need a loop
// hint: use the .includes() method

// var testSentence1 = "This website is awesome!"
//expected output = "Ths wbst s wsm!"

// function removesVowels(sentence) {
//   var vowels = ["a", "e", "i", "o", "u"]
//   var splitSentence = sentence.split("")
//   var newSentenceArray = []
//   for (i = 0; i < splitSentence.length; i++) {
//     if (vowels.includes(splitSentence[i]) === false) {
//       newSentenceArray.push(splitSentence[i])
//     }
//   }
//     var newSentence = newSentenceArray.join("")
//     return newSentence
}

// console.log(removesVowels("This website is awesome"))
