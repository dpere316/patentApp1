import React from "react";
import { Card } from "react-bootstrap";
import Iframe from 'react-iframe';
//import { useAuth0 } from "@auth0/auth0-react";

const regex = /(<([^>]+)>)/ig;


const PatView = (props) => {

  console.log(props);
  //const { isAuthenticated } = useAuth0();
  
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        {/*<Card.Title className="text-center">
          {props.pat.express.title.plain}
        </Card.Title>
        <Card.Text>
          {props.pat.express.abstract.plain.replace(regex, ' ')}
          <br />
        </Card.Text>*/}
        <Iframe
            url={getCorpus(props.pat.express)}
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

function getCorpus(pat){

  const id = pat.id.substring(2, pat.id.length-2);
  
  if (pat.patentCorpus === "USPAT"){
    return("http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1="+id+".PN.&OS=PN/"+id+"&RS=PN/"+id);
  }else if (pat.patentCorpus === "PGPUB"){
    return("http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.html&r=1&f=G&l=50&d=PG01&p=1&S1="+id+".PGNR.&OS=DN/"+id+"&RS=DN/"+id);
  }
}

export default PatView;
