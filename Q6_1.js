const fs = require("fs");
const InputfilePath="./assignment_1/input.txt";
const OutputFilePath="./assignment_1/output.txt";
const writeStream=fs.createWriteStream(OutputFilePath,{encoding:"utf8"});

const readStream=fs.createReadStream(InputfilePath,{encoding:"utf8"});

readStream.pipe(writeStream);

readStream.on("end",()=>{
    console.log(`finished reading input.txt file`);
});
writeStream.on("finish",()=>{
    console.log(`file has been copied from ${InputfilePath} to ${OutputFilePath}`);
});

readStream.on("error",(error)=>{
    console.log(`error while reading the file:`, error.message);
});
writeStream.on("error",(error)=>{
    console.log(`error writing the file:`, error.message);
});