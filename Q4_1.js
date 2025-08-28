// commomjs
const fs=require("fs");
const filePath="./assignment_1/sample.txt";

fs.access(filePath,fs.constants.F_OK ,(err)=>{
if(err){
    console.error("file not found")
    return;
}
const readStream=fs.createReadStream(filePath,{encoding:"utf8"});
//if file found then read aqnd print data from the file
readStream.on("data",(chunk)=>{
console.log("reading chunk:");
console.log(chunk);
});

//if reading is finished then print reading finished 
readStream.on("end",()=>{
console.log("finished reading file.");
});

//check if any problem occurs while reading or not
readStream.on("error",(error)=>{
    if(error)
    {
        console.log("an error occured while reading",error.message);
    }
});

});