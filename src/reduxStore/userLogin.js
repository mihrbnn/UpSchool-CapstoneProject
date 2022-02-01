import user1 from "../user.json";

const USER_LOGIN = "USER_LOGIN";

export const userLogin = (username, password) => ({
  type: USER_LOGIN,
  payload: { username, password },
});

const userReducer = (user = user1, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload.username === user.username &&
        action.payload.password === user.password
        ? { ...user, isLogin: true }
        : { ...user, isLogin: false };
    default:
      return user;
  }
};

export { userReducer };
