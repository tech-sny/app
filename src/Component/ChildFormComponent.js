import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ChildComHandler from "../App";

const ChildFormComponent = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onChildSave({
      location: getLocation,
      country: getCountry,
      pincode: getPincode,
    });
    console.log({
      location: getLocation,
      country: getCountry,
      pincode: getPincode,
    });
    setCountry("");
    setLocation("");
    setPincode("");
  };
  const location = "";
  const pincode = "";
  const country = "";
  const [getLocation, setLocation] = useState(location);
  const [getPincode, setPincode] = useState(pincode);
  const [getCountry, setCountry] = useState(country);
  const locationHandler = (event) => {
    setLocation(event.target.value);
  };
  const pincodeHandler = (event) => {
    setPincode(event.target.value);
  };
  const countryHandler = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label style={{backgroundColor:"pink"}}>child form</Form.Label>
          <Form.Control
            type="text"
            style={{backgroundColor:"pink"}}
            onChange={locationHandler}
            value={getLocation}
            placeholder="Enter location"
          />
          <Form.Control
            type="number"
            style={{backgroundColor:"pink"}}
            onChange={pincodeHandler}
            value={getPincode}
            placeholder="Enter pincode"
          />
          <Form.Control
            type="text"
            style={{backgroundColor:"pink"}}
            onChange={countryHandler}
            value={getCountry}
            placeholder="Enter country"
          />
          <Button type="submit">save</Button>
        </Form.Group>
      </Form>
      <h2 style={{ color: "lightYellow" }}>{getCountry}</h2>
      <h2 style={{ color: "lightYellow" }}>{getLocation}</h2>
      <h2 style={{ color: "lightYellow" }}>{getPincode}</h2>
    </div>
  );
};
export default ChildFormComponent;
