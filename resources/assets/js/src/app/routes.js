import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeComponent from "./layouts/home/home";
import AboutComponent from "./layouts/about/about";
import Links from "../app/components/navbar/navbar";


class RouterComponent extends React.Component{



   render(){
       return(
           <Router>
               <div>
                   
                   <Links />

                   <Route exact path="/" component={HomeComponent} />
                   <Route path="/about" component={AboutComponent} />

               </div>
           </Router>
       )
   }

}


export default RouterComponent;
