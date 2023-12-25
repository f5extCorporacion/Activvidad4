import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroments.js";

export const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export const authenticated = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection neontech ok!... 😀");
  } catch (error) {
    console.error(error);
  }
};

export const syncUp = async () => {
  try {
    //borra los datos maldigitados { force: true }
    await sequelize.sync();
    console.log("Synced neontech ok!... 😀");
  } catch (error) {
    console.error(error);
  }
};
