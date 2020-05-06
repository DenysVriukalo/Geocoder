import API_KEY from '../utils/api-key';

const API_URL_ADDRESS = 'http://localhost:8080/geopoint';
const API_URL_FILE = 'http://localhost:8080/uploadedFile';

export default class GerodotServices {

  static postRegistration = async userInfo => {
    // Регистрация
  }

  static postLogin = async (login, password) => {
    // Логин
  }

  // Change process.env.REACT_APP_GOOGLE_MAPS_API_KEY when fixed it
  static getCoordinatesFromGoogleApi = async address => {
    const res = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      ? await fetch(`https://maps.googleapis.com/maps/api/geocode/json?language=en&address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      : await fetch(`https://maps.googleapis.com/maps/api/geocode/json?language=en&address=${address}&key=${API_KEY.REACT_APP_GOOGLE_MAPS_API_KEY}`);
    const locationData = await res.json();
    return locationData.results[0];
  }

  static postCoordinates = async coordinates => {
    const res = await fetch(`${API_URL_ADDRESS}`, {
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

    return fetch(`${API_URL_FILE}`, {
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