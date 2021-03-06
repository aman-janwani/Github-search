import React, { useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Card,
  Row,
  CardBody,
  CardFooter,
  CardHeader,
} from "reactstrap";

import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const context = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handelSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
        toast(` Account Succsefully created for ${res.user.email}`, { type: "success" });
      })
      .catch(error => {
        console.log(error);
        toast(error.message, { type: "error" });
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handelSignup();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form className="form" onSubmit={handleSubmit}>
              <CardHeader className="">Sign Up here</CardHeader>
              <CardBody className="cardbody">
                <FormGroup row className="m-4">
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="m-4">
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign Up
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
