const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//Obtener listado
module.exports.get = async (request, response, next) => {
    const residencia = await prisma.residencias.findMany({
        orderBy:{
            idResidencia:'asc',
           
        },
        include:{
            cliente:true,
        }
    });
    response.json(residencia);
};

//Obtener por Id
module.exports.getById = async (request, response, next) => {
    let id = parseInt(request.params.id);
    const residencia = await prisma.residencias.findUnique({
        where: {idResidencia: id},
       
        include: {
            cliente:true,
        }
    });
    response.json(residencia);
};

//Crear un cliente
module.exports.create = async (request, response, next) => {
};

//Actualizar un cliente
module.exports.update = async (request, response, next) => {
};