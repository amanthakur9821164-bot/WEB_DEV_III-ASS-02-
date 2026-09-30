const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);


if (operation === "add") {
    console.log("Result:", num1 + num2);
}


else if (operation === "sub") {
    console.log("Result:", num1 - num2); 
}

else if (operation === "mul") {
    console.log("Result:", num1 * num2);  
}

else if (operation === "div") {
    if (num2 == 0) {
        console.log("Error:Can not divide by Zero");       
    } else {
        console.log("Result:", num1 / num2);    
    }
}


else {
    console.log("Invalid operations");    
}