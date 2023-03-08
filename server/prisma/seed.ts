import { PrismaClient } from "@prisma/client";
import { areasReserva } from "./seeds/areasReserva";
import { rol } from "./seeds/rol";
import { rubros } from "./seeds/rubros";

const prisma = new PrismaClient();

async function main() {
  //Crear Roles
  await prisma.rol.createMany({
    data: rol,
  });
  await prisma.areasReserva.createMany({
    data: areasReserva,
  });

  await prisma.rubros.createMany({
    data: rubros,
  });

  //--------------------------Create Cliente---------------------------
  //Cliente  Admin 1
  await prisma.cliente.create({
    //Instancia cliente 1
    data: {
      correo: "admin123@gmail.com",
      nombre: "Fiorella",
      apellidos: "Salas Fonseca",
      clave: "admin123",
      rol: {
        connect: { id: 1 },
      },
      estado: "activo",
    },
  });

  //Cliente Normal 2
  await prisma.cliente.create({
    //Instancia cliente 2
    data: {
      correo: "cliente123@gmail.com",
      nombre: "cliente1",
      apellidos: "cliente1",
      clave: "cliente123",
      idRol: 2,
      estado: "activo",
    },
  });

  //Cliente Normal 3
  await prisma.cliente.create({
    //Instancia cliente 3
    data: {
      correo: "nalvarez@gmail.com",
      nombre: "Nahomy",
      apellidos: "Alvarez",
      clave: "alvarez123",
      rol: {
        connect: { id: 2 },
      },
      estado: "activo",
    },
  });
  //Cliente Normal 4
  await prisma.cliente.create({
    //Instancia cliente 4
    data: {
      correo: "bmurillo@gmail.com",
      nombre: "Brandon",
      apellidos: "Murillo",
      clave: "murillo123",
      rol: {
        connect: { id: 2 },
      },
      estado: "activo",
    },
  });

  //Cliente Normal 5
  await prisma.cliente.create({
    //Instancia cliente 5
    data: {
      correo: "asegura@gmail.com",
      nombre: "Aaron",
      apellidos: "Segura",
      clave: "segura123",
      rol: {
        connect: { id: 2 },
      },
      estado: "activo",
    },
  });
  //Cliente Normal 6
  await prisma.cliente.create({
    //Instancia cliente 6
    data: {
      correo: "nrojas@gmail.com",
      nombre: "Nicolas",
      apellidos: "Rojas",
      clave: "nrojas123",
      rol: {
        connect: { id: 2 },
      },
      estado: "activo",
    },
  });
  //----------------Create Residencias------------------------
  //Residencia 1
  await prisma.residencias.create({
    //Instancia residencia 1
    data: {
      idCondominio: 1,
      idCliente: 1,
      cantidadPersonas: 1,
      annoInicio: new Date("2021-12-01"),
      cantidadCarros: 1,
      estado: "Habitada",
    },
  });

  //Residencia 2
  await prisma.residencias.create({
    //Instancia residencia 2
    data: {
      idCondominio: 2,
      idCliente: 2,
      cantidadPersonas: 2,
      annoInicio: new Date("2021-02-03"),
      cantidadCarros: 1,
      estado: "Habitada",
    },
  });

  //Residencia 3
  await prisma.residencias.create({
    //Instancia residencia 3
    data: {
      idCondominio: 3,
      idCliente: 3,
      cantidadPersonas: 1,
      annoInicio: new Date("2022-01-15"),
      cantidadCarros: 0,
      estado: "Habitada",
    },
  });

  //Residencia 4
  await prisma.residencias.create({
    //Instancia residencia 4
    data: {
      idCondominio: 4,
      idCliente: 4,
      cantidadPersonas: 2,
      annoInicio: new Date("2022-02-01"),
      cantidadCarros: 2,
      estado: "Habitada",
    },
  });
  //Residencia 5
  await prisma.residencias.create({
    //Instancia residencia 5
    data: {
      idCondominio: 5,
      idCliente: 5,
      cantidadPersonas: 1,
      annoInicio: new Date("2022-05-06"),
      cantidadCarros: 1,
      estado: "Habitada",
    },
  });
  //Residencia 6
  await prisma.residencias.create({
    //Instancia residencia 6
    data: {
      idCondominio: 6,
      idCliente: 6,
      cantidadPersonas: 1,
      annoInicio: new Date("2022-02-01"),
      cantidadCarros: 0,
      estado: "Habitada",
    },
  });
  //------------------Create Planes-------------------
  //Plan Basico
  await prisma.plan.create({
    data: {
      Descripcion: "Plan Basico", //mantenimiento(80000), agua(9000),electricidad(11000) y limpieza(15000)
      total: 115000.0, //cod 1,2,3,4
      rubros: {
        connect: [
          { idRubros: 1 },
          { idRubros: 2 },
          { idRubros: 3 },
          { idRubros: 4 },
        ],
      },
    },
  });
  //Plan Premium
  await prisma.plan.create({
    data: {
      Descripcion: "Plan Premium", // basico + estacionamiento(8000),seguridad(20000)
      total: 143000.0, //anteriores + 5,6
      rubros: {
        connect: [
          { idRubros: 1 },
          { idRubros: 2 },
          { idRubros: 3 },
          { idRubros: 4 },
          { idRubros: 5 },
          { idRubros: 6 },
        ],
      },
    },
  });
  //Plan Verde
  await prisma.plan.create({
    data: {
      Descripcion: "Plan Verde", //premium + areas(6500),jardineria(11700)
      total: 161200.0, // anteriores + 7,8
      rubros: {
        connect: [
          { idRubros: 1 },
          { idRubros: 2 },
          { idRubros: 3 },
          { idRubros: 4 },
          { idRubros: 5 },
          { idRubros: 6 },
          { idRubros: 7 },
          { idRubros: 8 },
        ],
      },
    },
  });

  //------------------Create Gestion---------------------
  //Gestion 1 y 2
  //Pendiente
  await prisma.gestion.create({
    data: {
      idResidencia: 1,
      idPlan: 2,
      fecha: new Date("2021-12-01"),
      estado: "Pendiente",
      deuda: 143000.0,
    },
  });
  await prisma.gestion.create({
    data: {
      idResidencia: 1,
      idPlan: 2,
      fecha: new Date("2021-12-01"),
      estado: "Pago",
      deuda: 0.0,
    },
  });

  //Gestion 3 y 4
  //Pendiente
  await prisma.gestion.create({
    data: {
      idResidencia: 2,
      idPlan: 3,
      fecha: new Date("2021-02-03"),
      estado: "Pendiente",
      deuda: 161200.0,
    },
  });
  //Pago
  await prisma.gestion.create({
    data: {
      idResidencia: 2,
      idPlan: 3,
      fecha: new Date("2021-02-03"),
      estado: "Pago",
      deuda: 0.0,
    },
  });

  //Gestion 5 y 6
  //Pendiente
  await prisma.gestion.create({
    data: {
      idResidencia: 3,
      idPlan: 1,
      fecha: new Date("2022-01-15"),
      estado: "Pendiente",
      deuda: 115000.0,
    },
  });

  //Pago
  await prisma.gestion.create({
    data: {
      idResidencia: 3,
      idPlan: 1,
      fecha: new Date("2022-01-15"),
      estado: "Pago",
      deuda: 0.0,
    },
  });

  //Gestion 7 y 8
  //Pendiente
  await prisma.gestion.create({
    data: {
      idResidencia: 4,
      idPlan: 2,
      fecha: new Date("2022-02-01"),
      estado: "Pendiente",
      deuda: 143000.0,
    },
  });
  //pago
  await prisma.gestion.create({
    data: {
      idResidencia: 4,
      idPlan: 2,
      fecha: new Date("2022-02-01"),
      estado: "Pago",
      deuda: 0.0,
    },
  });

  //Gestion 9 y 10
  //Pendiente
  await prisma.gestion.create({
    data: {
      idResidencia: 5,
      idPlan: 2,
      fecha: new Date("2022-05-06"),
      estado: "Pendiente",
      deuda: 143000.0,
    },
  });
  //pago
  await prisma.gestion.create({
    data: {
      idResidencia: 5,
      idPlan: 2,
      fecha: new Date("2022-05-06"),
      estado: "Pago",
      deuda: 0.0,
    },
  });

  //Gestion 11 y 12
  //Pendiente
  await prisma.gestion.create({
    data: {
      idResidencia: 6,
      idPlan: 1,
      fecha: new Date("2022-02-01"),
      estado: "Pendiente",
      deuda: 115000.0,
    },
  });
  //pago
  await prisma.gestion.create({
    data: {
      idResidencia: 6,
      idPlan: 1,
      fecha: new Date("2022-02-01"),
      estado: "Pago",
      deuda: 0.0,
    },
  });




}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
