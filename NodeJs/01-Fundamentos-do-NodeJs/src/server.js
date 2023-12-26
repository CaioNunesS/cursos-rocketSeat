import http from 'node:http';
const port = 3333

//GET => Buscar um recurso do back-end
//POST => criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => atualizar um reurso especifico no back-end
//DELETE => Deletar um recurso no back-end

//Stateful - Stateless

const users = []

const server = http.createServer((req, res) => {

    const {method, url} = req

    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
        })
        return res.writeHead(201).end('Criação de usuários')
    }
    return res.writeHead(404).end()
})

server.listen(port,() => {
    console.log(`Server listening port ${port}`);
})