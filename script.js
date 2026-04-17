
export function capitalize(str){
    let newString = '';
    let splitString = str.split('');
    const capitalFirstLetter = [];

    for(let i = 0; i <= splitString.length - 1; i++){
        if(i == 0){
            capitalFirstLetter.push(splitString[i].toUpperCase())
        }else{
            capitalFirstLetter.push(splitString[i])
        }
    }
    const convertToString = capitalFirstLetter.join("");
    console.log(splitString);
    console.log(capitalFirstLetter);
    console.log(convertToString);
    return convertToString;
}

export function reverseString(str){
    const convertStringToArray = str.split('');
    const reverseConvertedString = [];

    for(let i = convertStringToArray.length - 1; i >= 0; i--){
        reverseConvertedString.push(convertStringToArray[i])
    }
    const newString = reverseConvertedString.join("");
    console.log(convertStringToArray);
    console.log(reverseConvertedString);
    console.log(newString);
    return newString;
}

export const calc = {
    multiply(a, b){
        return a * b;
    },
    add(a, b){
        return a + b;
    },
    subract(a, b){
        return a - b;
    },
    divide(a, b){
        return a / b;
    },
}

