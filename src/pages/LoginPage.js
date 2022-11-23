import React, { useState } from "react"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import { isMobile } from "react-device-detect"
const LoginPage = ({ history }) => {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  return (
    <Row className="login-container m-0">
      <Col
        className="d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <Alert variant="warning" className="mb-5">
          (PWA Demo App)این سایت فقط برای تست و به عنوان نمونه کار برای رزومه
          طراحی شده است.
        </Alert>
        <Form
          className="input-form"
          style={isMobile ? { width: "70%" } : { width: "30%" }}
          onSubmit={(e) => {
            history.push("/my")
          }}
        >
          <Form.Group className="input-group">
            <Form.FloatingLabel style={{ width: "100%" }}>
              نام کاربری :
            </Form.FloatingLabel>

            <Form.Control
              type="text"
              className="login-input mb-5 mt-3"
              style={{ width: "100%" }}
              onChange={(e) => setUser(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="input-group">
            <Form.FloatingLabel style={{ width: "100%" }}>
              کلمه عبور :
            </Form.FloatingLabel>
            <Form.Control
              type="password"
              className="mb-5 mt-3 login-input"
              style={{ width: "100%" }}
              onChange={(e) => setPass(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit">تایید</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default LoginPage
