import React, { Component } from "react";
import PatView from "../component/patView";
import { Button, Form } from "react-bootstrap";
//const regex = /(<([^>]+)>)/ig;

class viewPatent extends Component {
  constructor() {
    super();

    this.state = {
      auth: "",
      role: "",
      pat: "",
      post: "",
      responseToPost: "",
    };
  }

  postLabel = () => {
    console.log("submit");
  };
  nextPost = () => {
    console.log("next");
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ pat: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/get-pat-data");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      this.state.pat && (
        <div>

          <PatView pat={this.state.pat} />

          <Form className="container mt-5">
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Is this a Machine Learning Patent?</Form.Label>
              <Form.Control as="select" size="sm" custom>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Is this a Active Learning Patent?</Form.Label>
              <Form.Control as="select" size="sm" custom>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              handleClick={this.postLabel}
            >
              {" "}
              Submit
            </Button>
          </Form>

          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              size="lg"
              className="mr-3"
              handleClick={this.nextPost}
            >
              {" "}
              Next
            </Button>
          </div>
        </div>
      )
    );
  }
}

export default viewPatent;
