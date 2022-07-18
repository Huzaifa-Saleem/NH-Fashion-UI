
import "../Home/home.scss";
import {Link} from 'react-router-dom'
import Slider from '../../Components/Slider/index'
import BasicTabs from '../../Components/Tabs';
import Button from "../../Components/Button";

const Home = () => {
  
  //windows width

  return (
    <div>
      <Slider/>
      <section>
      <div className='cloth'>
        <div className='clothing'>
          <div className='clothing-content'>
              <h2>Clothing <br /> Collections 2022</h2>
              <Link to='/'>SHOP NOW</Link>
          </div>
          <div className='clothing-img'>
              <img src="/images/clothing.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='flex'>
      <div className='accessories'>
      <div className='accessories-img'>
        <img src="/images/accessories.jpg" alt="" />
      </div>
      <div className='accessories-content'>
          <h2>Accessories</h2>
          <Link to='/'>SHOP NOW</Link>
      </div>
      </div>
      <div className='shoes'>
          <div className='shoes-content'>
          <h2>Shoes Spring <br /> 2022</h2>
          <Link to='/'>SHOP NOW</Link>
          </div>
        <div className='shoes-img'>
            <img src="/images/shoes.jpg" alt="" />
        </div>
      </div>
      </div>
      </section>
     
              <BasicTabs/>

      <section>
        <div className="sale row">
          <div className="col-md-4 collections">
            <div className="white-box"></div>
            <div className="collections-content">
              <h4 className="shoe">Clothings</h4>
              <h4>Shoes Collection</h4>
              <h4 className="shoe">Accessories</h4>
            </div>
          </div>
          <div className="col-md-4 bag">
          <img src="/images/bag.webp" alt="" />
          <p className="align-middle"> <span> Sale Of </span><br /> Rs.2999</p>
          </div>
          <div className="col-md-4 sale-content">
              <p className="deal">DEAL OF THE WEAK</p>
              <h4>Bags Collection</h4>
              <p className="time">30 &nbsp;:&nbsp; 03 &nbsp;:&nbsp; 09 &nbsp;:&nbsp; 02</p>
              <p className="days">Days <span></span> Hours <span></span> Minutes <span></span> Seconds</p>
              <Button title='SHOP NOW'/>
          </div>
        </div>
      </section>
      <section className='instagram'>
           <div>
            <img src="/images/insta-cloth.jpg" alt="" width={700} height="auto"/>
           </div>
           <div className='insta-content'>
            <h5>Instagram</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laboriosam ducimus minus. Necessitatibus voluptatem expedita cumque.</p>
            <h2>#NH_Fashion</h2>
           </div>
      </section>
    </div>
  )
}

export default Home
