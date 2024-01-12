import http from 'node:http';
import { json } from './middewares/json.js';
import { routes } from './routes.js';
import { extractQueryParams } from './utils/extract-query-params.js';

const port = 3333

//GET => Buscar um recurso do back-end
//POST => criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => atualizar um reurso especifico no back-end
//DELETE => Deletar um recurso no back-end

//Stateful - Stateless

const server = http.createServer(async (req, res) => {

    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        const { query, ...params } = routeParams.groups

        req.params = params
        req.query = query ? extractQueryParams(query) : {}

        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(port, () => {
    console.log(`Server listening port ${port}`);
})