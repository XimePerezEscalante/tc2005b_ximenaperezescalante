module.exports = (request, response, next) => {
    for (let privilegio of request.session.privilegios) {
        if (privilegio.nombre == "crear cancion") {
            return next();
        }
    }
    return response.status(403).render('403');
}