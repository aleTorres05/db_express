require("dotenv").config(); //Libreria que nos permite guardar nuestras credenciales y accesos (datos inportantes o snesibles del programa en un archivo ".env")

//importar mongoose
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env; //Extraer variables del archivo .env
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const Koder = mongoose.model(
  "koders",
  new mongoose.Schema({
    firstName: {
      //Reglas de mi atributo
      type: String,
      required: true, //Indicar que este campo es requerido
      minLength: 2,
      maxLength: 100, //Condición del tamaño del campo
    },
    lastName: {
      type: String,
      required: false,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    birthDate: {
      type: Date,
      required: false,
    },
    generation: {
      type: Number,
      min: 1,
      max: 100,
    },
  })
);

const write = (newKoder) => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Conexion exitosa");
      // Insertar nuevo modelo en la colección
      Koder.create(newKoder)
        .then(() => {
          console.log("Koder created");
        })
        .catch((error) => {
          console.log("Error al crear koder", error);
        });
    })
    .catch((error) => {
      console.error("Error al conectar con la base de datos", error);
    });
};

const read = () => {
  mongoose.connect(MONGO_URI).then(() => {
    console.log("Conexion exitosa");
  });
  return Koder.find();
};

module.exports = { write, read };
