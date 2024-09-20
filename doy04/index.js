
// object creation


const student={
    name:"ram",
    surname:"acharya",
    rollno:21,
    studentId:"fdksfjd1232321",
    className:10 
}
console.log(student.rollno);// if you want any value only you have to use .key in this case key is rollno

console.log(students);  // if you want all key and values of object use 


const students ={
    student1: {
     name:"ram",
   surname:"acharya",
   rollno:21,
   studentId:"fdksfjd1232321",
   className:10
       },
     student2: {
   name:"sita",
   surname:"acharya",
   rollno:1,
   studentId:"fdksfjd1dadf232321",
   className:10
    }
   }
   console.log(students.student2.name)
   



const students = [
    {
   name:"ram",
 surname:"acharya",
 rollno:21,
 studentId:"fdksfjd1232321",
 className:10
     },
     {
 name:"sita",
 surname:"acharya",
 rollno:1,
 studentId:"fdksfjd1dadf232321",
 className:10
     }
 ]
 console.log(students)//all students will be accessed
 console.log(students[1]) // students with index 1 will only accessed 



 const arr = [ 1 ,2 ,3 ,4 ,5];
     //       0  1  2  3  4  
// console.log(arr.length); // gives total numbers of things contain in array
//                     //5-1=4  
// console.log(arr[arr.length-1])  // gives the last value of array

// console.log(arr.push(6)); // added 6 at last index of array 
// console.log(arr);

// console.log(arr.shift()) // takes out first index value from array
// console.log(arr)

// console.log(arr.unshift(7));
// console.log(arr);

//           starting    ending
// console.log(arr.slice(0,3));
// console.log(arr)
// console.log(arr.splice(0,4));
// console.log(arr)
// console.log(arr.indexOf(2)); // to find index of give value
//   console.log(arr.includes(3)); // it helps to know value is available or not in array



const student= {
    name:"ram",
    rollno:4,
    classname:10,
    id:"jdshfakj2347"
}
  
  Object.freeze(student);

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));
// console.log(Object.assign({phoneno:97863453},student));
console.log(student.hasOwnProperty('name'));


 
 