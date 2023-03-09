import Card from 'react-bootstrap/Card';

const Cardmyactiviy = (props) => {
    return (
        <>
          <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Text>
              {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      );
}

export default Cardmyactiviy;