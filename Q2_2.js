//commonjs with callback function 
const fs = require("fs");

fs.readFile("not_existing_file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error object:", err);

    if (err.code === "ENOENT") {
      console.error(" File not found!");
    } else {
      console.error(" Some other error:", err.message);
    }
    return;
  }

  console.log(" File content:", data);
});