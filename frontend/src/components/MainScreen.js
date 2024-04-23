import React, { Children } from "react";
import "./MainScreen.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function MainScreen({ title, children }) {
  return (
    <div>
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
