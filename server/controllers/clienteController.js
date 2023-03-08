const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//Obtener listado
module.exports.get = async (request, response, next) => {
    const cliente = await prisma.cliente.findMany();
    response.json(cliente);
};

//Obtener por Id
module.exports.getById = async (request, response, next) => {
    let id = parseInt(request.params.id);
    const cliente = await prisma.cliente.findUnique({
        where: {id: id},
        include: {
            rol:true,
        }
    });
    response.json(cliente);
};

//Crear un cliente
module.exports.create = async (request, response, next) => {
};

//Actualizar un cliente
module.exports.update = async (request, response, next) => {
};