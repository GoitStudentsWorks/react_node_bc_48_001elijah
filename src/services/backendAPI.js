import axios from 'axios';

// axios.defaults.baseURL = 'https://taskpro.onrender.com/user';

axios.defaults.baseURL = 'http://localhost:3000';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = async userData => {
  const { data } = await axios.post('user/register', userData);
  token.set(data.token);
  return { ...data.user, token: data.token };
};

export const loginUserApi = async userData => {
  const { data } = await axios.post('user/login', userData);
  token.set(data.token);
  return { ...data.user, token: data.token };
};

export const currentUserApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('user/current');
  return data;
};

export const logoutUserApi = async userToken => {
  await axios.post('user/logout', userToken);
  token.unset();
  return null;
};

export const themeChangeUserApi = async theme => {
  const { data } = await axios.patch('user/', theme);
  return data;
};

export const updateUserApi = async userData => {
  const { data } = await axios.patch('user/updateUserInfo', userData);
  return data.user;
};
//---------------------------------------------BOARDS---------------------//

export const getListOfBoardsApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/board/');
  return data;
};

//---------------------------------------------EMAIL---------------------//

export const sendEmailApi = async userEmail => {
  const { data } = await axios.post('user/sendEmail', userEmail);
  return data.message;
};

// export const addColumn = async board => {
//   const { data } = await axios.post('board/column');
//   console.log(data);
//   return data;
// };

// export const editColumn = async board => {
//   const { data } = await axios.post('/board');
//   return data;
// };

export const removeColumnApi = async id => {
  await axios.delete(`/board/column/${id}`);
  return;
};

export const addCardApi = async newCard => {
  const { data } = await axios.post('/card', newCard);
  return data;
};

export const updateCardApi = async (id, cardData) => {
  const { data } = await axios.patch(`/card/${id}`, cardData);
  return data;
};

export const updateCardColumnApi = async id => {
  const { data } = await axios.patch(`/card/column/${id}`);
  return data;
};

export const removeCardApi = async id => {
  await axios.delete(`/card/${id}`);
  return;
};

export const authWithGoogleApi = async (data) => {
  const { credential } = data;
  const { idToken } = credential;
  const response = await axios.post('user/auth/google', { credential, idToken });
  token.set(response.data.token);
  return { ...response.data.user, token: response.data.token };
};