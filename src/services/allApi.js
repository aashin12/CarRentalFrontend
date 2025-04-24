import { commonApi } from "./commonApi";
import { serverurl } from "./serverurl";
import axios from 'axios';

//Authentication api
export const userLoginApi = async (email, password,role) => {
    return await commonApi('GET', `${serverurl}users?email=${email}&password=${password}&role=${role}`);
};

export const userRegisterApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}users`, reqBody);
  };

  // cars Api
export const addCarApi = async (carData) => {
    return await commonApi('POST', `${serverurl}cars`, carData);
  };
  
  export const getAllCarsApi = async () => {
    return await commonApi('GET', `${serverurl}cars`, {});
  };

  export const deleteCarApi = (carId) => {
    return commonApi("DELETE", `${serverurl}cars/${carId}`);
  };

  // Update car
  export const getCarDetailsAPI = (id) => {
    return commonApi('GET', `${serverurl}cars/${id}`)
  }


export const updateCarApi = (id, updatedData) => {
   return commonApi('PUT', `${serverurl}cars/${id}`, updatedData)
}

  // Wishlist Api
export const addToWishlistApi = async (carData) => {
  return await commonApi('POST', `${serverurl}wishlist`, carData);
};


export const removeFromWishlistApi = async (carId) => {
  return await commonApi('DELETE', `${serverurl}wishlist/${carId}`);
};

export const getWishlistApi = async () => {
  return await commonApi('GET', `${serverurl}wishlist`, {});
};



export const addToBookingsDetailsApi = (bookings) => {
  return commonApi('POST', `${serverurl}bookings`, bookings);
}



export const getBookingsDetailsApi = async () => {
  return await commonApi('GET', `${serverurl}bookings`, {});
};


export const deleteBookingsDetailsApi = async (bookingId) => {
  return await commonApi('DELETE', `${serverurl}bookings/${bookingId}`);
};
