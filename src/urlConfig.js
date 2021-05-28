let baseUrl =
  window.location.hostname === 'localhost'
    ? 'http://localhost:2000'
    : 'https://afribuys-backend-server.herokuapp.com';

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (filename) => {
  return `${baseUrl}/public/${filename}`;
};
