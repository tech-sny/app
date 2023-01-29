import DemoComponent from "./DemoComponent";
import "./DemoCss.css";
import { useState,useEffect } from "react";
import ChildFormComponent from "./ChildFormComponent";
import { Button, Form, } from "react-bootstrap";
import axios from 'axios';

function MainComponent() {
  const name = "";
  const salary = "";
  const dept = "";
  const image ="";
  const [getname, setName] = useState(name);
  const [getSalary, setSalary] = useState(salary);
  const [getDept, setDept] = useState(dept);
  const [getImage, setImage] = useState(image);
  const data = { name: getname, salary: getSalary, dept: getDept ,image:getImage};
  const [nameCss,setNameCss]=useState("pink");
  const [salaryCss,setSalaryCss]=useState("pink");
  const [dateCss,setDateCss]=useState("pink");
  const nameHandler = (event) => {
    setName(event.target.value);
    setNameCss("aqua");
    console.log(getname);
    
  };
  const deptHandler = (event) => {
    setDept(event.target.value);
    setDateCss("aqua");
    console.log(getDept);
  };
  const salaryHandler = (event) => {
    setSalary(event.target.value);
    setSalaryCss("aqua");
    console.log(getSalary);
  };
  const imageHandler = (event) => {
    setImage(event.target.value);
    setSalaryCss("aqua");
    console.log(getImage);
  };
  
  const submitHamdler = (event) => {
    event.preventDefault();
    console.log(event)
    const article = {name:data.name,salary:parseInt(data.salary),dept:data.dept};
    const formData = new FormData();
    formData.append('data',  String(`{"name":"${data.name}" ,"salary":"${data.salary}","dept":"${data.dept}"}`));
    formData.append('image', event.target[3].files[0]);
    
    

    axios({
      method: "post",
      url: "https://life-care.azurewebsites.net/employee",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    setName("");
    setDept("");
    setSalary("");
    setImage("")
  };


  return (
    <div>
      <title>My App</title>
      
      <Form onSubmit={submitHamdler}>
        <Form.Group>
          <Form.Label style={{backgroundColor:'pink'}}>Main form</Form.Label>
          <Form.Control
            type="text"
            style={{backgroundColor:nameCss}}
            onChange={nameHandler}
            value={getname}
            placeholder="Enter name"
          />
          <Form.Control
            type="text"
            style={{ backgroundColor: dateCss }}
            onChange={deptHandler}
            value={getDept}
            placeholder="Enter Department"
          />
          <Form.Control
            type="number"
            style={{ backgroundColor: salaryCss }}
            onChange={salaryHandler}
            value={getSalary}
            placeholder="Enter salary"
          />
          <input
            type="file"
            id="img"
            style={{ backgroundColor: salaryCss }}
            onChange={imageHandler}
            value={getImage}
            placeholder="select image"
          />
          <Button type="submit">save</Button>
        </Form.Group>
      </Form>
      <>
        {
          <DemoComponent
            name={getname}
            salary={getSalary}
            date={getDept}
            image={getImage} 
          />
        }
      </>
      
      
    </div>
  );
}

export default MainComponent;
