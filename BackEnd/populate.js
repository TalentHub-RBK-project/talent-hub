const db = require("./orm");

const { clients,freelancer,talents } = require('./data.json');

(async () => {
  try {
    await db.sequelize.sync({ force: true });

    await db.Client.bulkCreate(clients);
    console.log("clients saved");

    await db.Freelance.bulkCreate(freelancer);
    console.log("freelancer saved");

    await db.Talent.bulkCreate(talents);
    console.log("talents saved");
    await db.sequelize.close();
  } catch (error) {
    console.log("Error while saving data", error);
  }
})();