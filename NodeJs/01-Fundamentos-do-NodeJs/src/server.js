import http from 'node:http';
import { json } from './middewares/json.js';
const port = 3333

//GET => Buscar um recurso do back-end
//POST => criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => atualizar um reurso especifico no back-end
//DELETE => Deletar um recurso no back-end

//Stateful - Stateless

const users = []

const server = http.createServer(async (req, res) => {

    const { method, url } = req

    await json(req, res)

    if (method === 'GET' && url === '/users') {
        return res
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {

        const { name, email, id } = req.body

        users.push({
            id,
            name,
            email
        })
        return res.writeHead(201).end('Criação de usuários')
    }
    return res.writeHead(404).end()
})

server.listen(port, () => {
    console.log(`Server listening port ${port}`);
})