import axiosInstance from "./axiosInstance";

const getUserDetails = async () => {
  try {
    const getUserDetailsUrl =
      "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

    const res = await axiosInstance.get(getUserDetailsUrl);
    return res.data || [];
  } catch (error) {
    console.log("error", error);
  }
};

const getUserProfilePictures = async () => {
  try {
    const getUserProfilePicturesUrl = "https://randomuser.me/api/";
    const res = await axiosInstance.get(getUserProfilePicturesUrl);
    return res.data || [];
  } catch (error) {
    console.log("error", error);
  }
};

export { getUserDetails, getUserProfilePictures };
