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
  const [getname, setName] = useState(name);
  const [getSalary, setSalary] = useState(salary);
  const [getDept, setDept] = useState(dept);
  const data = { name: getname, salary: getSalary, dept: getDept };
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

  const submitHamdler = (event) => {
    event.preventDefault();
    const article = { name: data.name,salary:data.salary,dept:data.dept };
    axios.post('https://life-care.azurewebsites.net/employee', article)
        .then(response => this.setState({ articleId: response.data.id }));
    console.log(data);
    setName("");
    setDept("");
    setSalary("");
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
          
          <Button type="submit">save</Button>
        </Form.Group>
      </Form>
      <>
        {
          <DemoComponent
            name={getname}
            salary={getSalary}
            date={getDept} 
          />
        }
      </>
      
      
    </div>
  );
}

export default MainComponent;
