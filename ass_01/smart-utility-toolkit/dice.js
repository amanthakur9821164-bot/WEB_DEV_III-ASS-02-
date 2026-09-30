const crypto = require("crypto");
// Node.js ke built-in crypto module ko import kar rahe hain
// crypto ka use random/secure values generate karne ke liye kar sakte hain


const dice = crypto.randomInt(1, 7);
// randomInt() 1 se lekar 6 tak koi random integer generate karega
// 7 include nahi hota
// Generated number ko "dice" variable mein store kar rahe hain


console.log("Dice Rolled:", dice);
// Terminal mein dice ka random result print kar rahe hain