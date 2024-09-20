
    const arr = [

];

    

    function newStudent(event) {
        event.preventDefault(); 
        const name = document.getElementById("name").value;
        const id = document.getElementById("id").value;
        arr.push({ name, id,grades:[] });
        console.log(arr);
        document.getElementById("showOutput").innerText=` ${arr.map((data)=>(`${data.name} ${data.id}`))}`;
    }
// console.log(Object.assign({phoneno:97863453},student));
    function addMarks(event) {
        event.preventDefault(); 
        const studentId = document.getElementById("studentId").value;
        const subjectname = document.getElementById("subjectname").value;
        const marks = document.getElementById("marks").value;
       const student=arr.find((data)=>data.id==studentId);
       console.log(student);
       if(student){
        // Object.assign([{subjectname:marks}],{student});
       
      student.grades.push({subjectname,marks});
        
       }
       console.log(arr);
    }

    function showDetail(){
    const idOutput = document.getElementById("idOutput").value;
    const student=arr.find((data)=>data.id==idOutput);
     document.getElementById("studentdetials").innerHTML = `<h1> Detail of ${student.name}</h1> ${student.grades.map((data)=>(`<div> <b>${data.subjectname} </b>: <span>${data.marks} </span> </div>`))}`;

    }
    function updateDetails(event){
      event.preventDefault();
     const student=document.getElementById("stid").value;
     const grades=arr.find((res)=>res.id==student).grades;
      console.log(grades);
     document.getElementById("update").innerHTML=`${grades.map((data,index)=>(`<input id="subject${index}" value=${data.subjectname}></input> <input type="number" id="marks${index}" value=${data.marks}></input>`))}`
     
     console.log(student)
    //   if(student){
    //    student.g
    //   }
    //  console.log(arr);

    }
    function update(event){
    event.preventDefault();
    const student=document.getElementById("stid").value;
    const grades=arr.find((res)=>res.id==student).grades;
    // grades.map((data,index)=>( 
    //     const newgradename=document.getElementById().value;
        
    //         data[index]=newgradename
        
    // ));
    grades.forEach((data,index)=>{
        const newsub=document.getElementById(`subject${index}`).value;
        const newgrade=document.getElementById(`marks${index}`).value;
        data.subjectname=newsub;
        data.marks=newgrade;
    })
    console.log(arr);

    }
    function removeStudent(event) {
    event.preventDefault();
    const removeId = document.getElementById("removeId").value;
   
        arr.splice(removeId-1, removeId);
        console.log(arr);
      
}

