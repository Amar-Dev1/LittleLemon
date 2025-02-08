import '../App.css';
import { MdTableBar } from "react-icons/md";
import { Card, CardText } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MenuItem({ menuImg, menuTitle, menuDes, menuPrice }) {
    return (
        <Card style={{ width: '18rem', height: '360px' }} className='shadow'>
            <Card.Img variant="top" style={{ width: '100%', height: '50%', objectFit: 'cover' }} src={menuImg} />
            <Card.Body>
                <Card.Title>{menuTitle}</Card.Title>
                <Card.Text style={{ fontSize: "12px" }} className='text-muted'>
                    {menuDes}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
                <Link to={'/reservations'} className='fw-bold text-dark'>reserve a table <MdTableBar /></Link>
                <CardText className='price fw-bold'>
                    <span className='text-success'>$</span>{menuPrice}
                </CardText>
            </Card.Footer>
        </Card>
    );
}

export default MenuItem;