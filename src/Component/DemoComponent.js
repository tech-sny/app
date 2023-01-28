import { useState } from "react";
import "./DemoCss.css";
import ListGroup from "react-bootstrap/ListGroup";
import { FloatingLabel } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

function DemoComponent(props) {
  const list = [
    {
      name: "anand",
      location: "yhh",
      salary: "8545",
      date: "2022-12-26",
      country: "india",
      pincode: "84545",
    },
  ];
  const [getList, setList] = useState(list);
  const saveDataHandler = () => {
    setList((prevState) => {
      const a = [
        {
          name: props.name,
          location: props.location,
          salary: props.salary,
          country: props.country,
          pincode: props.pincode,
          date: props.date,
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
      <h2>Date : {props.date}</h2>
      <h2>Location : {props.location}</h2>
      <h2>Country : {props.country}</h2>
      <h2>Pincode : {props.pincode}</h2>
      <h2 style={{color:'green'}}>want to submit then click save button</h2>
      <button onClick={saveDataHandler}>Save All</button>
      <>{getList.map((x) =>  (
                <ListGroup key={x} horizontal={x}>
                  <h3>{x.date}</h3>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Name : {x.name}</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Location : {x.location }</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Salary : {x.salary}</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Country : {x.country}</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor:"rgb(110, 239, 63)"}}>Pincode : {x.pincode}</ListGroup.Item>
                </ListGroup>
              )
            )}</>
            
    </div>
  );
}
export default DemoComponent;
