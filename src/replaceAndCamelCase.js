function toCamelCase(str){
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
    console.log(str, str[i]) 
    if(str[i] == "-" || str[i] == "_") {
      str.splice(i, 1)
      str[i] = str[i].toUpperCase()
      
    }
    // if(str[i] == "_") {
    //   str.splice(i, 1)
    //   str[i] = str[i].toUpperCase()
    // } 
  }
    
  return str.join("")
    
  }
  exports.toCamelCase = toCamelCase

