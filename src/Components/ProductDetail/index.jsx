import React, { useState, useEffect } from "react";
import "../ProductDetail/productDetail.scss";
import { useLocation } from "react-router-dom";
import Button from "../Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import ProductImage from "../Carousel/ProductImage";
import SizeModal from "../SizeChart";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import NotificationModal from "../NotificationModal/NotificationModal";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState("");

  const up = () => {
    setCounter(counter + 1);
  };
  const down = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const res = await axios.get(
        "http://localhost:4000/api/products/find/" + id
      );
      setProducts(res.data);
    };

    getProducts();
    setIsLoading(false);
  }, [id]);

  const [modalShow, setModalShow] = React.useState(false);

  const handleAddToCart = () => {
    dispatch(addProduct({ ...products, counter, size }));
    window.alert("Product has been added to cart");
  };

  if (isLoading) {
    return (
      <div className="text-center loader">
        <div className="spinner-border ">
          <span className="sr-only "></span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="product-detail row">
        <div className="col-md-1"></div>
        <section className="product-detail-images col-md-4">
          <div>
            <div className="grid">
              <div className="pt-lg-5 px-lg-4">
                <ProductImage products={products} />
              </div>
            </div>
          </div>
        </section>
        <section className="product-detail-data d-block mt-lg-5 pt-3 pt-xl-4 ms-sm-5 ms-4 ps-sm-5 col-md-6">
          <h4 className="fs-3 fw-bold">{products.title}</h4>

          <div className="my-3">
            <h5 className="fs-2 fw-bold mb-0">$ {products.price}</h5> &nbsp;
            &nbsp; &nbsp;
          </div>

          <div className="fw-bold d-flex align-items-center mb-4">
            Size: &nbsp; &nbsp;{" "}
            {products.size?.map((size, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={size}
                  name="fav_language"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  required
                />
                  <label htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>

          <h5 className="size fw-bold" onClick={() => setModalShow(true)}>
            Size Chart
          </h5>
          <SizeModal show={modalShow} onHide={() => setModalShow(false)} />

          <div
            className="row mt-3 fw-bold d-flex align-items-center mt-4"
            style={{ paddingLeft: 12 }}
          >
            Color: &nbsp;{" "}
            {products.color?.map((color, index) => (
              <div
                className="acc-color"
                style={{ background: color }}
                key={index}
              ></div>
            ))}
          </div>
          <div className="d-sm-flex">
            <div className="d-flex counter justify-content-end">
              <p className="fs-6 fw-bold text-black mt-2">
                {counter} &nbsp; &nbsp;
              </p>
              <div className="me-2 d-flex flex-column">
                <KeyboardArrowUpIcon sx={{ fontSize: 20 }} onClick={up} />
                {/* <br /> */}
                <KeyboardArrowDownIcon sx={{ fontSize: 20 }} onClick={down} />
              </div>
            </div>
            <div className="d-none d-sm-block">&nbsp; &nbsp; &nbsp;</div>
            <div onClick={handleAddToCart}>
              <Button title="ADD TO CART" src={`/productDetails/${id}`} />
            </div>
          </div>
          <div className="mt-4 pt-2"></div>
          <div></div>
          <div className="pro-desc text-start mt-5">
            <h5 className="fw-bold text-black ">Product Description</h5>
            <p className="text-black mt-3 me-5">{products.desc}</p>
          </div>
        </section>
        <div className="col-md-1"></div>
      </div>
      <div className="pro-desc1 text-start ms-sm-5 ms-4 me-sm-5 mb-5 mt-sm-5 mt-3 px-sm-4">
        <h5 className="fw-bold text-black ">Product Description</h5>
        <p className="text-black mt-3 me-5">{products.desc}</p>
      </div>
    </>
  );
};

export default ProductDetail;
