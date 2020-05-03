const API_URL = '';

export default class GerodotServices {

  static postRegistration = (userInfo) => {
    // Регистрация
  }

  static postLogin = (login, password) => {
    // Логин
  }

  static postSingleAddress = (address) => {

    return fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: '' // TODO: ---- JSON OBJECT
    });
  }

  static postFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: formData // TODO: ---- JSON OBJECT
    })
  }

  static getSingleAddressHistory = () => {
    // Получение истории одиночных адрессов
  }

  static getFileHistory = () => {
    // Получение истории файлов
  }
}