import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.css';



const StyledMemberContainer = styled.div `
display:flex;
justify-content:center;
border: 1px solid red;
`
const StyledMemberDiv =  {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
background: '#2f3640',
width: '20%',
borderRadius: '50px',
padding: '2%',
boxShadow: '0px 1px 6px -2px rgb(128, 127, 127)',
color: '#f5f6fa',
};

export default function Member(props) {
    const { info } = props

    if(!info) {
        return <h1>No info provided</h1>
    }

    
    

    return (

        ['Info',].map((variant, idx)=>
        <Card bg={variant.toLowerCase()} style={{ width: '22rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card.Text>
          <ListGroup className="list-group-flush">
              <ListGroupItem>{info.email}</ListGroupItem>
              <ListGroupItem>{info.role}</ListGroupItem>
              {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
          </ListGroup>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    )


    //    <StyledMemberContainer> 
    //         <StyledMemberDiv>
    //             <h2>{info.name}</h2>
    //             <p>{info.email}</p>
    //             <p>{info.role}</p>
    //         </StyledMemberDiv>
    //     </StyledMemberContainer>
    )
}