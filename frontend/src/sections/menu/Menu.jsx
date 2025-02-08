import { Container, Row, Col } from 'react-bootstrap';
import './Menu.css';
import MenuItem from '../../components/MenuItem';
import MainTitle from '../../components/MainTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let menuTitleStyles = {
    color: 'black',
    textAlign: 'center',
    marginBottom: '20px',
    marginTop: '20px',
  };

  const fetchmenuItems = async () => {
    try {
      const response = await axios.get('https://devamar.pythonanywhere.com/api/menu-items');
      console.log('✅ API Response:', response.data);
      setMenuItems(response.data.results || response.data);
      setLoading(false);
    } catch (err) {
      console.error("❌ Load Failed", err.response.data);
      setError(err.response?.message || "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchmenuItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container id='menu' className='py-4 d-flex justify-content-center flex-column'>
      <MainTitle styles={menuTitleStyles} title="This weeks specials ✨" color="#495e57" />
      <Row className='d-flex justify-content-center align-items-center p-2 my-3'>
        {
          menuItems?.map((item) => (
            <Col key={item.id} xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center my-1'>
              <MenuItem
                menuTitle={item.title}
                menuImg={item.menu_image}
                menuDes={item.description}
                menuPrice={item.price}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Menu;