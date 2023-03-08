const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Obtener listado
module.exports.get = async (request, response, next) => {
  const gestion = await prisma.gestion.findMany({
    where: {
      estado: "Pago",
    },
    orderBy: {
      fecha: "desc",
    },
    include: {
      residencia: {
        select: {
          idResidencia: true,
          cliente: true,
        },
      },
    },
  });
  response.json(gestion);
};

//Obtener por Id
module.exports.getById = async (request, response, next) => {
  let id = parseInt(request.params.id);
  const gestion = await prisma.gestion.findMany({
    where: { idResidencia: id },
    include: {
      //residencia:true,
      residencia: {
        select: {
          idResidencia: true,
          idCondominio: true,
          cantidadPersonas: true,
          annoInicio: true,
          estado: true,
          cliente: true,
        },
      },
      plan: {
        select: {
          idPlan: true,
          Descripcion: true,
          total: true,
          //  rubros: true,
        },
      },
    },
  });
  response.json(gestion);
};

//Crear un cliente
module.exports.create = async (request, response, next) => {};

//Actualizar un cliente
module.exports.update = async (request, response, next) => {};
