// export async function getWord(listOfWords: Array<string>, wordLength: number, allowSameLetter:boolean): Promise<string>{
//     //Filter the incoming wordlist and put remaining word to new array
//     const lengthFilteredList = listOfWords.filter(w => w.length === wordLength);
//     const duplicateCharFilteredList = [];
//     let newWordList = [];
//     if(!allowSameLetter){
//         for(let i = 0; i < lengthFilteredList.length; i++){
//             //Check if there is any duplicate letters in each word
//             let hasDuplicates = (/([a-zA-Z]).*?\1/).test(lengthFilteredList[i]);
//             if (!hasDuplicates){
//                 //no duplicates, put word in new array
//                 duplicateCharFilteredList.push(lengthFilteredList[i]);
//                 }    
//             }
//             newWordList = duplicateCharFilteredList;
//     }else{
//         newWordList = lengthFilteredList;
//     }
//     if(newWordList.length > 0){
//         //return random word from the remaining words after filtering is done
//         let rnd =  Math.floor(Math.random() * newWordList.length);
//         const word = newWordList[rnd];
//         return word;
//     }else{
//         return "No words match those criterias"
//     }
//   }