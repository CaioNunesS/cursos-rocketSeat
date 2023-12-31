import http from 'node:http'
import { Transform } from 'node:stream'

const port = 3334

class InverseNumberStream extends Transform {
    _transform(chunk, enconding, callback) {
        const transformed = Number((chunk.toString())) * -1

        console.log(transformed);

        callback(null, Buffer.from(String(transformed)))
    }
}

//req => ReadableStream
//res => WritableStream

const server = http.createServer((req, res) => {
    return req
        .pipe(new InverseNumberStream())
        .pipe(res)
})

server.listen(port, () => {
    console.log(`Server listening port ${port}`);
})