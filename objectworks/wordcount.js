//wordcount
var text="hello hai hello hai"
// var words=text.split(" ") //words=['hello','hai','hello','hai']
var wordcount={}
// for(let word of words){ //word=hello word=hai word=hello
//     if(word in wordcount){
//         wordcount[word]+=1
//     }else{
//     wordcount[word]=1//hello:1 hai:1
//     }
// }
// console.log(wordcount);
text.split(" ").map(word=>word in wordcount?wordcount[word]+=1:wordcount[word]=1)
console.log(wordcount);