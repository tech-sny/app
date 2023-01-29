import { useState,useEffect } from "react";
import "./DemoCss.css";
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios'


function DemoComponent(props) {
  const imagePrefix="https://filestora.blob.core.windows.net/image/";
  const list = [
    {
      name: "anand",
      salary: "8545",
      date: "2022-12-26",
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
          date: props.date,
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
      <h2>Salary : {props.salary}</h2>
      <h2>Department : {props.date}</h2>
      <img src={imagePrefix+props.image}></img>
      <h2 style={{color:'green'}}>want to submit then click save button</h2>
      <>{getList.map((x) =>  (
                <ListGroup key={x} horizontal={x}>
                  <h3>{x.date}</h3>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Name : {x.name}</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Location : {x.dept }</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Salary : {x.salary}</ListGroup.Item>
                  <img  src={imagePrefix+x.image}></img>
                  
                </ListGroup>
              )
            )}</>
            
    </div>
  );
}
export default DemoComponent;
