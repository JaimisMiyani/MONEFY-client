const API_ROOT = `https://revest-app.herokuapp.com/api/`;

const token = () => localStorage.getItem('token');

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      'token': token()
    };
  };

