export function buildRoutePath(path) {
    const routeParameterRegex = /:([a-zA-Z]+)/g

    const pathWithParameters = path.replaceAll(routeParameterRegex, `(?<$1>[a-z0-9\-_]+)`)

    const pathRegex = new RegExp(`^${pathWithParameters}`)

    return pathRegex
}