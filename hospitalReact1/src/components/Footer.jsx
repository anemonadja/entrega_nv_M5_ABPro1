import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterReact() {
    return (
        <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Footer</Card.Title>
                <Card.Text>
                    Información Especial
                </Card.Text>
                <Button variant="primary">Ver mapa</Button>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    );
  }
  
  export default FooterReact;