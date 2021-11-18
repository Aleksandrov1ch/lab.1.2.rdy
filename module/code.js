 module.exports.caesarCipher = function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
      if(b.indexOf(a[i]) !== -1) {
         a.splice(i, 1);
         i--
      
       }
   }
     return a
  }
  