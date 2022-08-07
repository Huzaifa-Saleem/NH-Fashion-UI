import React, { useEffect, useState } from "react";
import "./Product.scss";
import Pagination from "../../Components/Pagination";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, useLocation } from "react-router-dom";
import ProductFilter from "../../Components/ProductFilter";
import Card from "../../Components/Card";
import axios from "axios";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curretnPage, setCurretPage] = useState(1);
  const [postPerPage] = useState(9);
  const [cat, setCat] = useState("");
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('all');
  const [search, setSearch] = useState("");

  const location = useLocation();

  
  useEffect(() => {
    if (location.pathname.split("/")[2] === "category") {
      setCat(location.pathname.split("/")[3]);
      setFilters("");
    } else if (location.pathname.split("/")[2] === "size") {
      setCat("");
      setFilters({
        [location.pathname.split("/")[2]]: location.pathname.split("/")[3],
      });
    } else if (location.pathname.split("/")[2] === "color") {
      setCat("");
      setFilters({
        [location.pathname.split("/")[2]]: location.pathname.split("/")[3],
      });
    } else {
      setCat("");
      setFilters("");
    }
  }, [location]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await axios.get(
        cat
          ? `http://localhost:4000/api/products?category=${cat}`
          : "http://localhost:4000/api/products"
      );
      // :
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [cat]);

  useEffect(() => {
    const filterposts = async () => {
      const filteredpotsts = posts.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      );

      setFilteredPosts(filteredpotsts);
    };
    filterposts();
  }, [filters, posts, cat]);

  useEffect(() => {
    if (sort === "all") {
      setFilteredPosts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredPosts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredPosts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  useEffect(()=>{
    const searchItems = async() =>{
      const item = await posts.filter((val)=>{
        return val.title.toLowerCase().includes(search.toLowerCase())
      })
      setFilteredPosts(item)
    }
    searchItems()
  },[search,posts])

  //current post
  const indexOfLastPost = curretnPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
      <div className="container-fluid p-head py-4">
        <div className="container p-head-1">
          <h2 style={{ color: "#111111", fontWeight: "bold" }}>Products</h2>

          <p className="mb-0">
            <Link to="/productDetail">Home</Link>{" "}
            <KeyboardArrowRightIcon
              sx={{ fontSize: 16, color: "black", marginTop: -0.5 }}
            />{" "}
            Products
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row container-fluid fil">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
          <div className="">
            <input type="text" onChange={e=>setSearch(e.target.value)} placeholder="Search" />
          </div>
        </div>
        <div className="col-lg-4 mx-5">
          Showing {indexOfFirstPost === 0 ? 1 : indexOfFirstPost}-
          {indexOfFirstPost + currentPosts.length} of{" "}
          <span>{filteredPosts.length}</span> results
        </div>
        <div className="col-lg-1"></div>
        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-2 mx-5">
          Sort by Price:
          <select name="" id="" onChange={e=>setSort(e.target.value)}>
            <option value="">all</option>
            <option value="asc">price(asc)</option>
            <option value="dsc">price(dsc)</option>
          </select>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-2 fil">
          <ProductFilter />
        </div>

        <div className="col-lg-8">
          <div className="contaiiner data">
            {currentPosts.map((post) => {
              return (
                <Card
                  key={post._id}
                  id={post._id}
                  img={post.img}
                  title={post.title}
                  price={post.price}
                  col={post.color}

                  // col={post.color[2]}
                />
              );
            })}

            {filteredPosts.length === 0 ? <span>No Products</span> : null}
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-8">
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
