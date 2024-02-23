import React, { useState, useContext, useEffect } from 'react';
import DocsItem from "./DocsItems/Docsitems";
import { Link, Redirect } from 'react-router-dom';
import "react-phone-input-2/lib/style.css";
import Naresh from './Logo.png';
import Cookies from 'js-cookie';
import './styles.css';
import Header from '../Components/Header/Header'
import Context from './Context/Context'

const Details = () => {
  const { FinelArray } = useContext(Context)
  console.log(FinelArray)
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [FinellProducts, setFinelProducts] = useState([]);
  const [IsActive,SetActive]=useState(false)

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3004/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const products = await response.json();
        setFinelProducts(products);
        SetActive(true)
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value)
  };

  const filteredProducts = FinellProducts.filter((product) =>
    String(product.Number).includes(PhoneNumber)
  );

  const isLoggedIn = Cookies.get("Token");
  if (!isLoggedIn) {
    return <Redirect to="Login" />;
  }

  return (
    <div className="container">
      
      <Header />
      <img src={Naresh} alt="Company logo" className="logo" />
      
      <input
        type='search'
        style={{ display: FinellProducts.length === 0 ? "none" : "block" }}
        placeholder='Search Former By Phone Number'
        onChange={handlePhoneChange}
      />
      {FinellProducts.length === 0 ? (
        <div>
          <h1 className='Warning FarmerLogo'>Please Add Formers Details 
            <Link to="/Entries" className="Link">
              <button className='Buttons'>New Farmer</button>
            </Link>
          </h1>
        </div>
      ) : (
        <div className="docs-list">


{IsActive ?   (
  <div>
    {filteredProducts.map((product, index) => (
      <DocsItem key={index} Info={product} />
    ))}
  </div>
):(
  <h1>Farmers List Loading....</h1>
)}

          
        </div>
      )}
    </div>
  );
};

export default Details;
