import DemoComponent from "./Component/DemoComponent";
import MainComponent from "./Component/MainComponent";
import "./Component/DemoCss.css";
import { useState,useEffect } from "react";
import ChildFormComponent from "./Component/ChildFormComponent";
import { Button, Form, } from "react-bootstrap";
import axios from 'axios';
import HomeComponent from "./Component/HomeComponent/HomeComponent";

function App() {
  


  return (
    <div><HomeComponent/> 
    </div>
  );
}

export default App;
