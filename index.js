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