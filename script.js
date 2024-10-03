function firstNonRepeatedChar(str) {
 const charferqcount = {};
	for(let char of str){
		if(charferqcount[char]){
			charferqcount += 1;
		}else{
			charferqcount[char] = 1;
		}
	}
	for(let char of str){
		if(charferqcount[char] === 1){
			return char;
		}
		
		}
	return null;
	}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
