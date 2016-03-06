function getHammingDistance(){
	/* 
	Given two strings str1 and str2 of same length (length must never be 0 
	or negative!), the Hamming Distance of those two strings are the number of 
	inversions per character needed to transform str1 and str2 or vise-versa. 
	Simply put, the Hamming Distance of two strings is the number of characters
	that differ in the ith position 1 to strlen(str1);
	*/

	// Get text field values and assign to str1 and str2.
	var str1 = document.getElementById("hammingDist1").value;
	var str2 = document.getElementById("hammingDist2").value;
	var hammingDistance = 0;

	// For case insensitivity.
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();

	if(str1.length != str2.length){
		// Both strings should have the same length.
		document.getElementById("hammingDistanceResult").innerHTML = "Error! Strings are not equal!";
	} else {
		// Traverse each character of both strings and increment hammingDistance when the characters differ.
		for(var i=0; i<str1.length; i++){
			if(str1.charAt(i) != str2.charAt(i)){
				hammingDistance++;
			}
		}
		// Display result.
		document.getElementById("hammingDistanceResult").innerHTML = "The Hamming Distance of " + str1 + " and " + str2 + " is " + hammingDistance;
	}
}

function countSubstrPattern(){
	/*
	Given a string original and pattern, we will count the number of occurrence 
	of pattern in original.
	*/
	// Get text field values and assign to original and pattern.
	var original = document.getElementById("substrPatt1").value;
	var pattern = document.getElementById("substrPatt2").value;
	var substrPatternCount = 0;

	// For case insensitivity.
	original = original.toUpperCase();
	pattern = pattern.toUpperCase();

	if(pattern.length > original.length){
		// If pattern.length is greater than original.length, return 0.
		substrPatternCount = 0;
	} else {
		// Starting from the 0th index, check if the pattern is equal to the substring of original from ith index up to pattern.length-characters. And increment substrPatternCount when equal.
		for(var i=0; i<original.length; i++){
			if(pattern == original.substr(i, pattern.length)){
				substrPatternCount++;
			}
		}
	}
	document.getElementById("substrPatternResult").innerHTML = "The number of occurrences of pattern, " + pattern + ", in original, " + original + " is " + substrPatternCount;
}