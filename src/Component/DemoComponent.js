import { useState,useEffect } from "react";
import "./DemoCss.css";
import axios from 'axios'


function DemoComponent(props) {
  const imagePrefix="https://filestora.blob.core.windows.net/image/";
  const list = [
    {
      name: "",
      salary: "",
      dept: "",
      image:""
     
    },
  ];
  const [getList, setList] = useState([]);

   useEffect(() => {
    axios
        .get("https://life-care.azurewebsites.net/employee")
      
        .then(function (response) {
            console.log(response);
            setList(response.data);
        })
        
        .catch(function (error) {
            console.log(error);
        });
},[]);
  const saveDataHandler = () => {
    setList((prevState) => {
      const a = [
        {
          name: props.name,
          salary: props.salary,
          dept: props.dept,
          image:imagePrefix+props.image
        },
      ];
      return [...prevState, ...a];
    });

    console.log(getList);
  };
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h2>Department : {props.dept}</h2>
      <h2>Salary : {props.salary}</h2>
      <h2 style={{color:'green'}}>want to submit then click save button</h2>
      <>{getList.map((x) =>  (
                <div class="card" style={{width:"400px",}}>
                  <img class="card-img-top" src={imagePrefix+x.image} alt="Card image"/>
                  <div class="card-body">
                    <h4 class="card-title">{x.name}</h4>
                    <h6 class="card-text">{x.dept}        {x.salary}</h6>
                    <a href={imagePrefix+x.image} class="btn btn-primary">Download Reciept</a>
                  </div>
                </div>
                
              )
            )}</>
            
    </div>
  );
}
export default DemoComponent;
