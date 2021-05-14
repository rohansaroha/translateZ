import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import theme from "./theme";
import { OrderProvider } from "./hooks/OrderContext";

const App = ()=> {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <OrderProvider>
          <div className="App">
            <Switch>
              <Route path='/' exact={true} component={Landing}/>
            </Switch>
          </div>
        </OrderProvider>
      </Router>
    </ThemeProvider>

  );
};

export default App;
