import React from "react";
//import {useEffect, useState} from "react";
import axios from "axios";

import { BrowserBarComponent } from "../components/BrowserBarComponent";

const url = "/positions.json?description=api";
export class BrowserBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      result: [],
      isLoading: true,
    };
  }

  //hook, no se puede usar con clases
  //const [getDatos, setDatos] = useState();

  componentDidMount() {
    //console.log("DidMount");

    axios.get(url).then((response) => {
      this.setState({
        datos: response.data,
        isLoading: false,
      });
    });
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

    let result = this.state.datos.filter((item) => {
      let searchBy = item.title.includes(keyword);
      return searchBy;
    });

    if (result.length === 0) {
      console.log(
        "No se ha encontrado resultados en titulo, buscando por descripcion..."
      );
      result = this.state.datos.filter((item) => {
        let searchBy = item.description.includes(keyword);
        return searchBy;
      });
    }

    this.setState({
      result: result,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <img alt="Spinner" src="../loading.gif"></img>
        </>
      );
    }

    return (
      <>
        <BrowserBarComponent
          result={this.state.result}
          handleClick={this.handleClick}
        ></BrowserBarComponent>
      </>
    );
  }
}
