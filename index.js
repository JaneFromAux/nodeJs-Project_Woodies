const http = require('http')
const fs = require('fs')


const handleErrPath = fs.readFileSync("assets/error.html")
function changePath(path, response) {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.end(handleErrPath)
            return
        }
        response.end(data.toString())
    })
}

const server = http.createServer((request, response) => {
    console.log(request.url, request.method)
    if (request.url === "/") {
        changePath("assets/home.html", response)
    } else {
        const requestPath = "assets" + request.url;
        changePath(requestPath, response)
    }
})

const PORT = 9999
server.listen(PORT, () => {
    console.log("The server is listening on : ", PORT)
})