const types_specie = {};

const db = require("../../../database");

types_specie.getTypesSpecie = async (req, res) => {
  const allspecie = await db.query("SELECT * FROM ctlg_type_specie");
  res.json(allspecie);
};

types_specie.getIdTypesSpecie = async (req, res) => {
  const idtype = await db.query(
    "SELECT * FROM ctlg_type_specie WHERE id = ?",
    [req.params.id]
  );
  res.json(idtype);
};

module.exports = types_specie;
