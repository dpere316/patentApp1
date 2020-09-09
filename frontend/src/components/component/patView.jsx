import React from "react";
import { Card } from "react-bootstrap";
import Iframe from 'react-iframe';
//import { useAuth0 } from "@auth0/auth0-react";

const regex = /(<([^>]+)>)/ig;


const PatView = (props) => {

  //const { isAuthenticated } = useAuth0();
  
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title className="text-center">
          {props.pat.express.title.plain}
        </Card.Title>
        <Card.Text>
          {props.pat.express.abstract.plain.replace(regex, ' ')}
          <br />
          {/*Patent Type: {this.state.data.patentType}*/}
        </Card.Text>
        <Iframe
            url={"http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1="+props.pat.express.documentId.number+".PN.&OS=PN/"+props.pat.express.documentId.number+"&RS=PN/"+props.pat.express.documentId.number}
            width="100%"
            height="1000px"
            className="size"
            display="initial"
            postion="relative"
        />
      </Card.Body>
    </Card>
  );
  
}

export default PatView;
