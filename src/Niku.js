import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import Footer from "./Components/Footer/Footer";
import App from "./App";

class Niku extends React.Component {

    render() {
   
        return (
          <App />
        // <Link to="App /" className="btn btn-primary">Sign up</Link>
        );
      }
  
}

export default Niku;