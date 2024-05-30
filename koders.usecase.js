const db = require("./db");

function add(newKoder) {
  if (!newKoder.firstName) throw new Error("firstName is required");

  if (!newKoder.lastName) throw new Error("lastName is required");

  if (!newKoder.email) throw new Error("email is required");

  if (!newKoder.birthDate) throw new Error("birthDate is required");

  newKoder.birthDate = Date.parse(newKoder.generation);

  if (!newKoder.generation) throw new Error("generation is required");

  newKoder.generation = parseInt(newKoder.generation);
  if (isNaN(newKoder.generation))
    throw new Error("generation must be a number");

  if (newKoder.generation <= 0)
    throw new Error("generation must be greater than 0");

  db.write(newKoder);
  return newKoder;
}

// function deleteAll() {
//   const dbData = db.read();
//   dbData.koders = [];
//   db.write(dbData);
// }

// function deleteByName(name) {
//   if (!name) throw new Error("name is requierd");

//   const dbData = db.read();

//   dbData.koders = dbData.koders.filter((koder) => koder.name !== name);

//   db.write(dbData);

//   return dbData.koders;
// }

async function getAll() {
  const koders = db.read();
  return koders;
}

module.exports = {
  add,
  //   deleteAll,
  //   deleteByName,
  getAll,
};
