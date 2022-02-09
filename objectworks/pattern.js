var pattern="ABBC"
//find first recursive character
var wc={};
for(let char of pattern){
    if(char in wc){
        console.log(`${char} is first recursie character`);
         break;
    }
    else{
        wc[char]=1
    }
}