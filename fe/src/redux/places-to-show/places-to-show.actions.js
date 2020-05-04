import GerodotServices from '../../utils/gerodot-services';
import { actionPromise } from '../promise/promise.actions';

const actionSetPlaces = places => ({ type: 'SET_PLACES_TO_SHOW', places });

// By User Input
export const actionSetPlacesByUserInput = address => async dispatch => {
  const coordinates = await dispatch(actionPromise('GoogleApi', GerodotServices.getCoordinatesFromGoogleApi(address)))
  const places = [{
    // required: latitude & longitude at which to display the marker
    coords: { lat: coordinates.geometry.location.lat, lng: coordinates.geometry.location.lng },
    title: coordinates.formatted_address, // optional
  }];
  dispatch(actionSetPlaces(places));
  dispatch(actionPromise('GerodotApi', GerodotServices.postCoordinates(coordinates)));
};

// By User File Uploaded
export const actionSetPlacesByUserUpload = file => async dispatch => {
  const res = await dispatch(actionPromise('GerodotApi', GerodotServices.postFile(file)));
  // if API returns id made one more fetch to get data from file
  // TODO: ...
};

// By User History Single Address
export const actionSetPlacesByHistoryAddressId = id => async dispatch => {
  const coordinates = await dispatch(actionPromise('GerodotApi', GerodotServices.getCoordinatesById(id)))
  const places = [{
    coords: { lat: coordinates.geometry.location.lat, lng: coordinates.geometry.location.lng },
    title: coordinates.formatted_address,
  }];
  dispatch(actionSetPlaces(places));
}

// By User History File
export const actionSetPlacesByHistoryFileId = id => async dispatch => {
  const coordinates = await dispatch(actionPromise('GerodotApi', GerodotServices.getFileCoordinatesById(id)));
  // TODO: format data and dispatch it
}