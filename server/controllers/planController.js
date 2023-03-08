const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//Obtener listado
module.exports.get = async (request, response, next) => {
    const plan = await prisma.plan.findMany();
    response.json(plan);
};

//Obtener por Id
module.exports.getById = async (request, response, next) => {
    let id = parseInt(request.params.id);
    const plan = await prisma.plan.findUnique({
        where: {idPlan: id},
        include: {
            rubros:true,
        }
    });
    response.json(plan);
};

//Crear un cliente
module.exports.create = async (request, response, next) => {
};

//Actualizar un cliente
module.exports.update = async (request, response, next) => {
};