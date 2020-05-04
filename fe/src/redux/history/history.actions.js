import GerodotServices from '../../utils/gerodot-services';
import { actionPromise } from '../promise/promise.actions';

export const actionSetNextAddressPage = addressesList => ({ type: 'SET_NEXT_ADDRESS_PAGE', addressesList });
export const actionSetNextFilePage = filesList => ({ type: 'SET_NEXT_ADDRESS_PAGE', filesList });
