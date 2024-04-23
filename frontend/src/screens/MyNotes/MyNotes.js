import React from "react";
import MainScreen from "../../components/MainScreen";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/esm/Badge";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import notes from "../../data/notes";

function MyNotes() {
  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
    }
  };
  return (
    <div>
      <MainScreen title="Welcome back Vamsi Vattigunta...">
        <Link to="createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create New Note
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Head>{note.title}</Accordion.Head>
                  </span>

                  <div>
                    <Button href={`/notes/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on date:
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </MainScreen>{" "}
    </div>
  );
}

export default MyNotes;
