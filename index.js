/*
Carrasco, Angelica Grace A.
2013-47726
cmsc128-ay2015-16-assign002-js
*/

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

	if(str1.length != str2.length){
		// Both strings should have the same length.
		document.getElementById("hammingDistanceResult").innerHTML = "Error! Strings are not equal!";
		console.log("Error! Strings are not equal!");
	} else {
		// Traverse each character of both strings and increment hammingDistance when the characters differ.
		for(var i=0; i<str1.length; i++){
			if(str1.charAt(i) != str2.charAt(i)){
				hammingDistance++;
			}
		}
		// Display result.
		document.getElementById("hammingDistanceResult").innerHTML = "The Hamming Distance of " + str1 + " and " + str2 + " is " + hammingDistance;
		console.log("Hamming Distance " + hammingDistance);
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

	if(pattern.length > original.length){
		// If pattern.length is greater than original.length, return 0.
		document.getElementById("substrPatternResult").innerHTML = "Pattern length is greater than original length: 0";
		console.log("substrPatternCount: " + substrPatternCount);
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
	console.log("Substr Pattern Count: " + substrPatternCount);
}

function isValidString(){
	/*
	Given an alphabet string where are all letters are assumed to be unique, 
	this function returns true if the string is a valid string based on the 
	letters of alphabet.
	*/

	// Get text field values and assign to str and alphabet.
	var str = document.getElementById("validStr1").value;
	var alphabet = document.getElementById("validStr2").value;
	// Create negated character set regex with alphabet as the character set.
	var regex = new RegExp("[^" + alphabet + "]", "g");
	// Search str for a match against regex. Returns an array of matches.
	var mismatch = str.match(regex);

	if(mismatch == null){
		// If mismatch is null, then the string is valid, since there are no matches for negated character set.
		document.getElementById("validStringResult").innerHTML = "The string, " + str + ", is valid in alphabet, " + alphabet + ": " + true;
		console.log("isValidString: " + true);
	} else {
		// Otherwise, the string is invalid.
		document.getElementById("validStringResult").innerHTML = "The string, " + str + ", is not valid in alphabet, " + alphabet + ": " + false;
		console.log("Is String Valid: " + false);
	}
}

function getSkew(){
	/*
	Given a genome str of some length q (where q>0), it returns the number of 
	Gs minus the number of Cs in the first nucleotides (q>=n). The value can 
	be zero, negative or positive. The first position is one (1) not zero (0) 
	as we typically associate with string implementations.
	*/

	// Get text field values and assign to str and n.
	var str = document.getElementById("getSkew1").value;
	var n = document.getElementById("getSkew2").value;
	// Initialize gCount, cCount and skew to 0.
	var gCount = 0;
	var cCount = 0;
	var skew = 0;

	if(n>str.length){
		// n must not be greater than str.length.
		document.getElementById("getSkewResult").innerHTML = "Error! N is greater than length of string!";
		console.log("Error! N is greater than length of string!");
	} else if(n<1){
		// n must not be a negative or zero (0).
		document.getElementById("getSkewResult").innerHTML = "Error! N should not be a negative or zero (0)";
		console.log("Error! N should not be a negative or zero (0)");
	} else {
		// Starting from index 1(0) up to index n, count the number Gs and Cs, and subtract cCount from gCount to get the skew.
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == "G" || str.charAt(i-1) == "g"){
				gCount++;
			} else if(str.charAt(i-1) == "C" || str.charAt(i-1) == "c"){
				cCount++;
			}
		}
		skew = gCount - cCount;
		document.getElementById("getSkewResult").innerHTML = "Skew: " + skew;
		console.log("Skew: " + skew);
	}
}

function getMaxSkewN(){
	/*
	Given a genome str of some length q (where q>0), it returns the maximum 
	number of Gs minus the number of Cs in the first nucleotides (q>=n). The 
	value can be zero, negative or positive. The first position is one (1) not
	zero (0) as we typically associate with string implementations.
	*/
	// Get text field values and assign to str and n.
	var str = document.getElementById("getMaxSkew1").value;
	var n = document.getElementById("getMaxSkew2").value;
	// Initialize gCount, cCount and skew to 0.
	var gCount = 0;
	var cCount = 0;
	var maxSkew = 0;

	if(n>str.length){
		// n must not be greater than str.length.
		document.getElementById("getSkewResult").innerHTML = "Error! N is greater than length of string!";
		console.log("Error! N is greater than length of string!");
	} else if(n<1){
		// n must not be a negative or zero (0).
		document.getElementById("getSkewResult").innerHTML = "Error! N should not be a negative or zero (0)";
		console.log("Error! N should not be a negative or zero (0)");
	} else {
		// Starting from index 1(0) up to index n, count the number Gs and Cs, and subtract cCount from gCount to get the skew.
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == "G" || str.charAt(i-1) == "g"){
				gCount++;
			} else if(str.charAt(i-1) == "C" || str.charAt(i-1) == "c"){
				cCount++;
			}
			if((gCount-cCount) > maxSkew){
				// compare if current check is greater than previous maxSkew, update if so.
				maxSkew = gCount - cCount;
			}
		}
		document.getElementById("getMaxSkewResult").innerHTML = "Maximum Skew: " + maxSkew;
		console.log("Maximum Skew: " + maxSkew);
	}	
}

function getMinSkewN(){
	/*
	Given a genome str of some length q (where q>0), it returns the minimum 
	number of Gs minus the number of Cs in the first nucleotides (q>=n). The 
	value can be zero, negative or positive. The first position is one (1) not
	zero (0) as we typically associate with string implementations.
	*/
	// Get text field values and assign to str and n.
	var str = document.getElementById("getMinSkew1").value;
	var n = document.getElementById("getMinSkew2").value;
	// Initialize gCount, cCount and skew to 0.
	var gCount = 0;
	var cCount = 0;
	var minSkew = 0;

	if(n>str.length){
		// n must not be greater than str.length.
		document.getElementById("getSkewResult").innerHTML = "Error! N is greater than length of string!";
		console.log("Error! N is greater than length of string!");
	} else if(n<1){
		// n must not be a negative or zero (0).
		document.getElementById("getSkewResult").innerHTML = "Error! N should not be a negative or zero (0)";
		console.log("Error! N should not be a negative or zero (0)");
	} else {
		// Starting from index 1(0) up to index n, count the number Gs and Cs, and subtract cCount from gCount to get the skew.
		for(var i=1; i<=n; i++){
			if(str.charAt(i-1) == "G" || str.charAt(i-1) == "g"){
				gCount++;
			} else if(str.charAt(i-1) == "C" || str.charAt(i-1) == "c"){
				cCount++;
			}
			if(i==1){
				minSkew = gCount - cCount;
			}
			if((gCount-cCount) < minSkew){
				// compare if current check is less than previous minSkew, update if so.
				minSkew = gCount - cCount;
			}
		}
		document.getElementById("getMinSkewResult").innerHTML = "Minimum Skew: " + minSkew;
		console.log("Minimum Skew: " + minSkew);
	}	
}