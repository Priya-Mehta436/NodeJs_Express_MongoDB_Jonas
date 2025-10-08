const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res) => {
    //solution 1
    // fs.readFile('test-file.txt',(err,data) => {
    //     if(err){
    //         console.log(err);
    //         res.end('File not found');
    //     }
    // })
//solution 2: streams
//     const readable = fs.createReadStream('ttest-file.txt');
//     readable.on('data',chunk => {
//         res.write(chunk); 
//     }); 
//     readable.on('end',() => {
//         res.end();
// });
//     readable.on('error',err => {
//         console.log(err);
//         res.statusCode = 500;
//         res.end('File not found');
//     });

//solution 3: streams and pipe
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readableSource.pipe(writeableDestination);
    //it will automatically manage the flow of data
    //it will read data from readable source and write to writeable destination
    //it will also end the writeable destination when readable source ends
});


server.listen(8000, "127.0.0.1", () => {
    console.log('Listening....');
});
