const http = require("http");

const server = http.createServer((req, res) => {
    // res.end("Hey i am Aman");

    if (req.url === "/") {
        res.end("Welcome to Our page")
    }

    else if (req.url === "/about") {
        res.end("Welcomee to ABOUT page")
    }
    else if (req.url === "/contact") {
        res.end("Welcomee to CONTACT page")
    }
    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is Successfully running on port");
})