const remove_Char = str => str.replace(/[^\x20-\x7E]/gi,"")
console.log(remove_Char('äÄçÇéÉêw3resouröceÖÐþúÚ/'));