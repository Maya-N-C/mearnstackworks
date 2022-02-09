var string="hello hai"
//print vowels from this string(a,e,o,i)
Array.from(string).filter(char=>char=="a" ||char=="e"||char=="i"||char=="o"||char=="u").forEach(char=>console.log(char))
// Array.from(string).filter(char=>char.includes(string)).forEach(char=>console.log(char))