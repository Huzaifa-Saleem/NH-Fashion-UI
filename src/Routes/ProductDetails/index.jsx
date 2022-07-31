import React, { useEffect, useState } from 'react'
import Trending from '../../Components/Carousel/Trending';
import ProductDetail from '../../Components/ProductDetail';
import data from '../../Components/ProductDetail/data';

const ProductDetails = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
      setProducts(data.id)
  },[])

  return (
  <div className='product-detail'>

    {data.map((val) => {
      return (
        <ProductDetail
          key={val.id}
          img0={val.image[0]}
          img1={val.image[1]}
          img2={val.image[2]}
          img3={val.image[3]}
          {... val}
          // title={val.title}
          // reviewCount={val.stats.reviewCount}
          // price={val.price}
          // description={val.content.description}
          // sku={val.sku}
          // catagory={val.catagory}
          // product={val.content.product}
          // material={val.content.material}
        />
      );
    })}
    
    <section className='container pb-5'>
       <Trending/>
    </section>


  </div>
  )
}

export default ProductDetails
