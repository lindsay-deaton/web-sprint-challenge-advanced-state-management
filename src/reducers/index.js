import { ADD_SMURF_FAIL, ADD_SMURF, ADD_SUCCESS, FETCH_DATA_FAIL, FETCH_DATA_START, FETCH_DATA_SUCCESS } from "./../actions"

export const initialState = {
  smurfs: [],
  isLoading: false,
  error:''
}

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        smurfs: '',
        isLoading: true,
        error: '',
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error:'',
      }
    case FETCH_DATA_FAIL:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        error: action.payload,
      }
    case ADD_SMURF:
      return {
        ...state,
        isLoading: true,
      }
    case ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: [...state.smurfs, action.payload]
      }
    case ADD_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary