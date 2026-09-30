const fs = require("fs");

// Create File
fs.writeFile("data.txt", "Hello from Node.js", (err) => {

    if (err) {
        console.log("Error creating file:", err);
    } else {
        console.log("File created successfully!");
    }

});

// Read File
fs.readFile("data.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("File Content:", data);
    }

});

//Append --> Update Operation
fs.appendFile("data.txt", "\nThis is updated content.", (err) => {

    if (err) {
        console.log("Error updating file:", err);
    } else {
        console.log("File updated successfully!");
    }

});

//Delete

fs.unlink("data.txt", (err) => {

    if (err) {
        console.log("Error deleting file:", err);
    } else {
        console.log("File deleted successfully!");
    }

});