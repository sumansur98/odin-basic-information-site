const http = require('http');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer((req, res) => {

    console.log(req.url);
    let filePath = './';

    switch(req.url) {
        case '/':
            filePath += 'index.html';
            break;
        case '/about':
            filePath += 'about.html';
            break;
        case '/contact-me':
            filePath += 'contact-me.html';
            break;
        default :
            filePath += '404.html';
            break;
        
    }

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        res.write(data);
        res.end();
      } catch (err) {
        console.error(err);
        res.end();
      }

    console.log('filepath requested ', filePath);

});

server.listen(PORT, 'localhost', ()=>{
    console.log('server listening on port ' + PORT);
})