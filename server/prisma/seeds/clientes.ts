
export const clientes = [
    //1
    {
        correo: "admin123@gmail.com",
        nombre: "Fiorella",
        apellidos: "Salas Fonseca",
        clave: "admin123",
        rol: { 
            connect: {id: 1}
         },
        estado: "activo",
    },

    //2
    {
        correo: "admin456@gmail.com",
        nombre: "admin2",
        apellidos: "admin2",
        clave: "admin123",
        rol: { 
            connect: {id: 1}
         },
        estado: "activo",
    },
      //3
      {
        correo: "cliente123@gmail.com",
        nombre: "cliente1",
        apellidos: "cliente1",
        clave: "cliente123",
        rol: { 
            connect: {id: 2}
         },
        estado: "activo",
    },
]