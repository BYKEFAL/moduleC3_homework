function printObject(obj) {
   for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
         console.log(prop, obj[i]);
      }
   }
}