import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SizeModal(props) {

const location = useLocation();
const id = location.pathname.split("/")[2];

const [products, setProducts] = useState([]);

useEffect(() => {
  const getProducts = async () => {
    const res = await axios.get('http://localhost:4000/api/products/find/'+ id)
    setProducts(res.data);     
  };

  getProducts();
});

var shoesSize = products.categories?.includes("shoes");
var manSize = products.categories?.includes("man");
var womanSize = products.categories?.includes("woman");
var kidSize = products.categories?.includes("kid");

var size,src
if(shoesSize){
size="Shoes Size"
src="/images/Shoe-Size.jpg"
}
else if (manSize){
size="Man's Size Chart"
src="/images/Men-Size.jpg"
}
else if(womanSize){
size="Woman's Size Chart"
src="/images/Women-Size.jpg"  
}
else if(kidSize){
size="Kids's Size Chart"  
src="/images/Kid-Size.jpg"
}


  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='fw-bold'>
        {size}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={src} className='d-flex justify-content-center mx-3 my-3' width={730} height='auto' alt="" />
      </Modal.Body>
      <Modal.Footer className='fw-normal text-black text-center d-block py-3 fs-6'>
        Note: The size help refers to the product measurements which may slightly vary according to design.
      </Modal.Footer>
    </Modal>
  );
}

export default SizeModal