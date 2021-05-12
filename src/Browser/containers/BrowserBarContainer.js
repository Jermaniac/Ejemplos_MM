import React from "react";
import axios from 'axios'
import {BrowserBarComponent} from '../components/BrowserBarComponent'

const url = "/positions.json?description=api";
export class BrowserBarContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            datos : [],
            result : []
        }
    }

    componentDidMount() {

        axios.get(url)
        .then( (response) => {
            this.setState(
                {
                    datos: response.data
                }
            )
        })
    }

    handleClick = () => {

        const keyBoard = document.getElementById("ejemplo").value
        const result = this.state.datos.filter( (item) => {
            let searchBy = item.title.includes(keyBoard);
            if (searchBy) {return searchBy}
            else {
                searchBy = item.description.includes(keyBoard)
                return searchBy;
            }
        })
        this.setState({
            result: result
        })

    };

    render(){

        return (
            <>
                <BrowserBarComponent result={this.state.result} handleClick={this.handleClick}></BrowserBarComponent>
            </>
        );

    }
}
