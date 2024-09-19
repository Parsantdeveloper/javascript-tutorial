const student= {
    name:"ram",
    rollno:4,
    classname:10,
    id:"jdshfakj2347"
}

Object.freeze(student);


console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(Object.assign({phoneno:97863453},student));

