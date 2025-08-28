// ecma script or ES6 module or import m odule
import { fs } from "fs";//import * as fs from "fs"; this to use whole file system module

const filePath = "./sample.txt";

readFile(filePath, "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error(" Error: File not found!");
    } else {
      console.error("An error occurred while reading the file:", err.message);
    }
    return;
  }

  console.log("File content:");
  console.log(data);
});