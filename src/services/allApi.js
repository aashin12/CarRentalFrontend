import { commonApi } from "./commonApi";
import { serverurl } from "./serverurl";

export const carsAddApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}cars`,reqBody)
}

export const userLoginApi = async (email, password,role) => {
    return await commonApi('GET', `${serverurl}users?email=${email}&password=${password}&role=${role}`);
};

export const userRegisterApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}users`, reqBody);
  };