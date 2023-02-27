

import { BsEyeSlash} from 'react-icons/bs';

import { BsEye} from 'react-icons/bs';
import Form from "react-bootstrap/Form";

import { useState } from "react";
import Monkey1 from "../assets/close.png";
import Monkey2 from "../assets/open.png";




const LoginPage = () => {
  const [monkey, setMonkey] = useState(Monkey1);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(BsEyeSlash);

  const changed = () => {
    if (monkey === Monkey1) {
      setMonkey(Monkey2);
    } else {
      setMonkey(Monkey1);
    }

   
    if (type === "password") {
      setIcon(BsEye);
      setType("text");
    } else {
      setIcon(BsEyeSlash);
      setType("password");
    }
  };
  return (
    <div className="container text-center  mt-5">
      <Form className="form  form-control rounded  m-4">
        <h2 className="title">LOGİN</h2>

        <div className=" text-center p-4 m-3">
          <img src={monkey} alt="" className="monkey" />
        </div>

        <Form.Group className="input-form mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input"
            type="email"
            placeholder="Enter Email Address"
          />
        </Form.Group>

        <Form.Group className="input-form mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input mb-3"
            type={type}
            placeholder="Enter Password"
          />
          <span className="icon" onClick={changed}>
            {icon}
          </span>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginPage;

