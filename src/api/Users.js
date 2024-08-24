import { saveUserInfo } from "../utils/common";
import data from "./data.json";

const dummyapi = (user) => {
  if (data[user]) {
    return Promise.resolve(data[user].role);
  }
  return Promise.reject("Invalid User");
};

const login = (user) => {
  return dummyapi(user).then((role) => {
    saveUserInfo({
      user,
      role,
    });
    return {
      status: "success",
      data: role,
    };
  });
};

export { login };
