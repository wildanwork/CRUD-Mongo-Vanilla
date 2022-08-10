function stringManipulation(word){
    if (word[0] == 'a' || word[0] == 'u' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o'){
    console.log(word);
} else {
   let a = word.slice(1)
   console.log(a + word[0] + 'nyo')
}
}
stringManipulation('ayam')
stringManipulation('bebek')