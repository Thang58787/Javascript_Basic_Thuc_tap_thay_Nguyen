let company = {
    company : "abc",
    activity : "food and drink",
    address :{
        street : "le quang dao",
        number : 20,
        city : "Ha noi",
        zipcode: "33116",
    },
    yearOfEstablishment : 3033,
};
company.address.city ="Vinh";
company["address"]["number"] = 32;
company["yearOfEstablishment"] =123

console.log(company)
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

let hobby = "dancing";
if(hobby == "coding"){
 console.log("** I love coding too! **");
} else {
 console.log("** Can you teach me that? **");
}