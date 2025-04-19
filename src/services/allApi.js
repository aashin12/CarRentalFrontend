import { commonApi } from "./commonApi";
import { serverurl } from "./serverurl";

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

// Cart API
export const addToCartApi = async (carData) => {
  return await commonApi('POST', `${serverurl}cart`, carData); // assuming /cart is your cart endpoint
};


export const getCartApi = async () => {
  return await commonApi('GET', `${serverurl}cart`, {});
};

export const removeFromCartApi = async (id) => {
  return await commonApi('DELETE', `${serverurl}cart/${id}`);
};

// Booking API
export const addToBookingsApi = async (carData) => {
  return await commonApi('POST', `${serverurl}bookings`, carData);
};

export const getBookingsApi = async() =>{
  return await commonApi("GET", `${serverurl}bookings`,{});
};

export const removeBookingApi = async(id) => {
  return await commonApi("DELETE", `${serverurl}bookings/${id}`);
};