import React from 'react';
import {Card , ListGroup , ListGroupItem} from 'react-bootstrap';
const News = (props) => {
    const {title , description} = props.article;
    return (
        <div>
            <div className="cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    </Card.Body>
                    {description}
                    <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default News;