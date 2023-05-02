// Write a function named createServer that creates a simple HTTP server using the built-in http module. The server should listen on port 3000 and respond to all requests with a plain text response of "Hello, World!".

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile('./public/public.html', function (err, data) {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<h1>No File Found</h1>')
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end();
            }
        })
    }
    else if (req.url === '/about') {
        fs.readFile('./public/about.html', function (err, data) {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<h1>No File Found</h1>')
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end();
            }
        })
    }
    else if (req.url === '/contact') {
        fs.readFile('./public/contact.html', function (err, data) {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<h1>No File Found</h1>')
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end();
            }
        })
    } else {
        fs.readFile('./public/404.html', function (err, data) {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<h1>No File Found</h1>')
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end();
            }
        })
    }
})

const PORT = '3000';
server.listen(PORT)
console.log(`Listening on ${PORT}`);