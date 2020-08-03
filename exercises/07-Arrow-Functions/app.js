const rapid = (param) => {    
    var test2 = [];
    for (var i = 0; i < param.length; i++) {        
    var test = param.charAt(i);           
    var test1 = test.toLowerCase();
        if (test !== "a" && test !== "e" && test !== "i" && test !== "o" && test !== "u") {  
    var test2 = test2 + test1;
    var test2 = test2.toUpperCase(); }
    }
 return test2;
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));
