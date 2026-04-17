
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
