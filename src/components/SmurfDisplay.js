import React, { useEffect } from 'react';
import { connect } from "react-redux"
// import AddForm from "./AddForm"
import {addSmurfs} from "./../actions"

export class SmurfDisplay extends React.Component {
    useEffect(() => {
        props.addSmurfs();
}, [])
        

    render() {
    return (<div>
        <h1>Smurfs</h1>
        
        {props.isLoading ? <p> Currently loading...</p> : null}
        
        {props.error ? <p>{props.error}</p> : null}

        {console.log("smurfs: ", props.smurfs)}

        {props.smurfs.map((item) => {
            <div>
                <h2>{item.name}</h2>
                <p>Position: {item.position}</p>
                <p>Nickname: {item.nickname}</p>
                <p>Description: {item.description}</p>
            </div>
        })}
            
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (mapStateToProps, {addSmurfs}) (SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.