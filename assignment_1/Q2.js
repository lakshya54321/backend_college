//without anonymous callback function 

const fs=require("fs");

function callback(err,data)
{
    if(err)
    {
        if(err.code==="ENOENT")
        {
            console.error("Error: File not found!");
        }
        else {
            console.error("An error occurred while reading the file:", err.message);
          }
          return;
        }
        console.log("File content:");
  console.log(data);
    }
    const filePath = "./assignment_1/sample.txt";
    fs.readFile(filePath, "utf8", callback);