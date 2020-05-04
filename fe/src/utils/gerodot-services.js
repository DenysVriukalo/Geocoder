const API_URL = '';

export default class GerodotServices {

  static postRegistration = async userInfo => {
    // Регистрация
  }

  static postLogin = async (login, password) => {
    // Логин
  }

  static getCoordinatesFromGoogleApi = async address => {
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?language=en&address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    const locationData = await res.json();
    return locationData.results[0];
  }

  static postCoordinates = async coordinates => {
    const res = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: JSON.stringify(coordinates)
    });
    // в ответ id записи?
  }

  static postFile = async file => {
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

  static getAddressHistory = async () => {
    // Получение истории одиночных адрессов
  }

  static getFileHistory = async () => {
    // Получение истории файлов
  }

  static getCoordinatesById = async id => {
    // get coords by id
  }

  static getFileCoordinatesById = async id => {
    // get fileCoords by id
  }
}