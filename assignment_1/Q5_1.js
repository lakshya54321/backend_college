const fs=require("fs");

const filePath="./assignment_1/sample.txt";

const writeStream=fs.createWriteStream(filePath,{encoding:"utf8"});
//creates a readable stream (overwrite if it exists)
//writes data to the file
writeStream.write("hello, Node.js!");
//end thw stream
writeStream.end();
//event when writing is finished
writeStream.on("finish",()=>{
    console.log("writing is finished to path",filePath);
});
//event to find the error
writeStream.on("error",()=>{
    console.log("an error occured while writing " ,error.message);
});

