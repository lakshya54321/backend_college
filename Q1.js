//commonjs syntax
const students={
    name:"Lakshya",
    sapid:"500121282",
    address:{
        city:"agra",
        state:"Uttar pradesh",
        pincode:282005
    },
    course:{
        name:"Btech CSE",
        subjects:{
            sem1:["maths","physics"],
            sem2:["DBMS","OS"]
        },
    },
};

function greatstudent()
{
    return `Hello ${students.name}! welcome to the fullstack course.`;
}
module.exports={
    students,
    greatstudent
};