//using ES6 syntax
export const students = {
    name: "Lakshya",
    sapid: "500121282",
    address: {
      city: "Agra",
      state: "Uttar Pradesh",
      pincode: 282005
    },
    course: {
      name: "BTech CSE",
      subjects: {
        sem1: ["Maths", "Physics"],
        sem2: ["DBMS", "OS"]
      },
    },
  };
  
  export function greatStudent() {
    return `Hello ${students.name}! Welcome to the fullstack course.`;
  }
  