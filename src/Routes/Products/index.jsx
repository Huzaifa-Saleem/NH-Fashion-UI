import React, { useEffect, useState } from "react";
import "./Product.scss";
import Pagination from "../../Components/Pagination";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
import ProductFilter from "../../Components/ProductFilter";
import Card from "../../Components/Card";
import Data from "../../Components/Card/data";
const Products = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curretnPage, setCurretPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Data;
      setPosts(res);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //current post
  const indexOfLastPost = curretnPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => {
    setCurretPage(pageNumber);
  };

  //return loader
  if (loading) {
    return (
      <div className="text-center loader">
        <div className="spinner-border ">
          <span className="sr-only "></span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container-fluid p-head">
        <div className="container p-head-1">
          <h2 style={{ color: "#111111", fontWeight: "bold" }}>Products</h2>
          <p>
            <Link to="/productDetail">Home</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/> Products
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row container">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="container">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-md-4">
          Showing {(indexOfFirstPost === 0 ? 1 : indexOfFirstPost)}-
          {indexOfFirstPost + currentPosts.length} of{" "}
          <span>{posts.length}</span> results
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          Sort by Price:
          <select name="" id="">
            <option value="">all</option>
            <option value="">low to high</option>
            <option value="">high to low</option>
          </select>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <ProductFilter />
        </div>
        <div className="col-md-8">
          <div className="contaiiner data">
            {currentPosts.map((post) => {
              return (
                <Card
                  key={post.id}
                  img={post.img}
                  title={post.title}
                  price={post.price}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <br />
          <br />
          <div className="pagination d-flex justify-content-center">
            <Pagination
              postPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Products;
