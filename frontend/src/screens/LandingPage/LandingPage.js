import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     navigate("/mynotes");
  //   }
  // }, []);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title"> Welcome to Note Diary</h1>
              <p className="subtitle">One Safe place for all your notes</p>
            </div>
            <div className="button-container">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
