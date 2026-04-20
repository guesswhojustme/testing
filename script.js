
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

export function caeserCipher(str, key){
    const convertedString = str.split('')
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arrayAlphabet = alphabet.split('');
    const cipheredArrayString = [];

    for(let i = 0; i <= convertedString.length - 1; i++){
        console.log(i);
        for(let j = 0; j <= arrayAlphabet.length - 1; j++ ){
            console.log(j);
            if(convertedString[i] === arrayAlphabet[j]){
                let shift = j + key
                console.log(`shift index: ${j + key}`);
                if(shift > arrayAlphabet.length - 1){
                    shift = shift - arrayAlphabet.length;
                }
                cipheredArrayString.push(convertedString[i] = arrayAlphabet[shift])
                break;
            }
        }
    }

    const newArray = cipheredArrayString.join('');
    return newArray;
}


export function analyzeArray(array){
    const average = () => {
        const total = array.reduce((prev, cur) => prev + cur, 0)
        const average = total / array.length;
        return average;
    };

    const min = () => {
        const sort = array.sort((a, b) => a - b)
        return sort[0];
    }

    const max = () => {
        const sort = array.sort((a, b) => b - a);
        return sort[0];
    }

    const length = () => array.length;

    const obj = {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    }
    return JSON.stringify(obj)
}
