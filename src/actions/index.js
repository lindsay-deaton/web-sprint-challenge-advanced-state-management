import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';


        // - Fetch and display data from the included server code on mounting.
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data.results);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
      console.log("getSmurfs: err", err)
      dispatch({ type: FETCH_DATA_FAIL, payload: "List of Smurfs:" + err.response.statusText})
  })
}

export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL'


export const addSmurf = (smurf) => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res.data);
      dispatch({type:ADD_SMURF_FAIL, payload: ''})
    })
    .catch(err => {
      console.log("addSmurf: err", err.response.data.Error);
      dispatch({
        type: ADD_SMURF_FAIL,
        payload: "Adding Smurf to List:" + err.response.data.Error
      })
  })
}





//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.