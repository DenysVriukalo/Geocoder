const INITIAL_STATE = {
  addressesList: [],
  filesList: [],
  addressesPageIdx: 0,
  filesPageIdx: 0 // or maybe last idx...
};

const historyReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_NEXT_ADDRESS_PAGE') {
    const newAddressesList = [...state.addressesList, ...action.addressesList];
    return { ...state, addressesList: newAddressesList, addressesPageIdx: addressesPageIdx + 1 };
  }
  if (action.type === 'SET_NEXT_FILE_PAGE') {
    const newFilesList = [...state.filesList, ...action.filesList];
    return { ...state, fileList: newFilesList, filePageIdx: filesPageIdx + 1 };
  }
  return state;
} 