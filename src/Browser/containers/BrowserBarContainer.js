import React from "react";
//import {useEffect, useState} from "react";
import axios from 'axios';

import {BrowserBarComponent} from '../components/BrowserBarComponent'

const url ="/positions.json?description=api";
export class BrowserBarContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            datos: [],
            result: []
        }
    }

    //hook, no se puede usar con clases
    //const [getDatos, setDatos] = useState();

    componentDidMount(){
        //console.log("DidMount");

        axios.get(url)
        .then( (response) => {
            this.setState(
                {
                    datos: response.data
                }
            )
        })
    }

    // useEffect( () => {
    //     console.log("useEffect");

    //     axios.get(url)
    //     .then( (response) => {
    //         //console.log(response.data);
    //         setDatos(response.data);
    //     })

    //   });

    handleClick = () => {

        //console.log("handleClick");
        const keyword = document.getElementById("browserbar").value;
        const result = this.state.datos.filter( (item) => {
            
            let searchBy = item.title.includes(keyword);
            if(searchBy) {
                return searchBy; 
            }
            else {
                searchBy= item.description.includes(keyword);
                return searchBy;
            }
        })
        this.setState(
            {
                result: result
            }
        )
    }

    render(){
        return(
            <>
                <BrowserBarComponent result={this.state.result} handleClick={this.handleClick}></BrowserBarComponent>
                
            </>
        );
    }
}

