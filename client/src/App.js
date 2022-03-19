import React, { Component } from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import "./style.css";
import './styles/global.css';
import GoogleSans from './styles/fonts/GoogleSans/GoogleSans-Medium-v1.27.ttf';

const theme = createTheme({
    typography: {
      fontFamily: [
        GoogleSans,
      ].join(','),
    }
  });
class App extends Component {

    
    render() {
        return (
            <ThemeProvider theme={theme}>

            <React.Fragment>
                <main className="container">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/notFound" component={NotFound}/>
                        <Redirect to="/notFound"/>
                    </Switch>
                </main>
            </React.Fragment>
            </ThemeProvider>

        );
    }
}

export default App;
