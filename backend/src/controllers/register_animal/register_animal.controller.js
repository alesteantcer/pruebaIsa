const newRegisterAnimalCtrl = {};

const db = require("../../../database");


newRegisterAnimalCtrl.getRegister = async (req, res) => {
  const allanimal = await db.query("SELECT * FROM register_animal");
  res.json(allanimal);
};

newRegisterAnimalCtrl.postRegister = async (req, res) => {
  const {
    name,
    photo,
    location,
    sound,
    description,
    scientificName,
    id_ctlg_type_specie,
    id_users,
  } = req.body;
  const newRegisterAnimal = {
    name,
    photo,
    location,
    sound,
    description,
    scientificName,
    id_ctlg_type_specie,
    id_users,
  };
  await db.query("INSERT INTO register_animal set ?", [newRegisterAnimal]);
  res.json({ message: "Post animal" });
};

newRegisterAnimalCtrl.deleteIdRegister = async (req, res) => {
  await db.query("DELETE FROM register_animal WHERE id = ?", [req.params.id]);
  res.json({ message: "Delete id Animal" });
};

newRegisterAnimalCtrl.getIdRegister = async (req, res) => {
  const idanimal = await db.query(
    "SELECT * FROM register_animal WHERE id = ?",
    [req.params.id]
  );
  res.json(idanimal);
};

module.exports = newRegisterAnimalCtrl;
