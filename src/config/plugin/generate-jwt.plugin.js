import jwt from "jsonwebtoken";
import { envs } from "./../enviroments/enviroments.js";

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    //configutacion del webtoken
    jwt.sign(
      payload,
      envs.SECRET_JWT_SEED,
      {
        //fecha de expitacion 2h
        expiresIn: envs.JWT_EXPIRE_IN,
      },
      //callback validacion si existe un error o no
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        resolve(token);
      }
    );
  });
};

export default generateJWT;
