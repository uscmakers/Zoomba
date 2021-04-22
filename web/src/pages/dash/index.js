import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import zoom from "./img/zoom.jpg";

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
      console.log("pressed");
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

function Dash() {
  const [keyPressed, setKeyPressed] = useState(false);
  const upPress = useKeyPress("w");
  const leftPress = useKeyPress("a");
  const downPress = useKeyPress("s");
  const rightPress = useKeyPress("d");

  function handleClick(id) {
    var msg = id + " was clicked. Sending request to the server now";
    console.log(msg);
    axios
      .post(`https://still-fjord-52738.herokuapp.com/`, {
        Button: id,
      })
      .then((response) => {
        console.log("done");
      });
  }

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Welcome to Zoomba!</h2>
      <p style={{ textAlign: "center" }}>
        Please click on the buttons below to move your remote zoomba!
      </p>

      <Container>
        <Row>
          <Col>
            <Row style={{ height: 150 }}>
              <div>
                {upPress && "w"}
                {leftPress && "a"}
                {downPress && "s"}
                {rightPress && "d"}
              </div>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  onClick={() => {
                    handleClick("up");
                  }}
                >
                  Up
                </button>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row style={{ height: 30 }}></Row>
            <Row>
              <Col></Col>
              <Col>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  onClick={() => {
                    handleClick("left");
                  }}
                >
                  {" "}
                  Left{" "}
                </button>
              </Col>
              <Col>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  onClick={() => {
                    handleClick("down");
                  }}
                >
                  Down
                </button>
              </Col>
              <Col>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  onClick={() => {
                    handleClick("right");
                  }}
                >
                  Right
                </button>
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dash;
