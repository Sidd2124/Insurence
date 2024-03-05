import React, { useState, useEffect } from 'react';
import DocsItem from "./DocsItems/Docsitems";
import {Redirect } from 'react-router-dom';
import "react-phone-input-2/lib/style.css";
import Naresh from './Logo.png';
import Cookies from 'js-cookie';
import './styles.css';
import Header from '../Components/Header/Header'

import axios from 'axios';


import './Details.css'

const Details = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [FinellProducts, setFinelProducts] = useState([]);
  const [IsActive,SetActive]=useState(false)
  const [Timer,SetTimer]=useState(0)

  const OperationEraise = (J) => {
    const Operation = FinellProducts.filter((each) => each.id !== J);
    setFinelProducts(Operation);
  }

console.log(Timer)

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dataapi-36b92-default-rtdb.firebaseio.com/data.json');
      SetTimer(100)
      if (response) {
       
        const products = response.data;
        const dataArray = Object.values(products);
        setFinelProducts(dataArray);
        SetActive(true);
       
      } else {
        throw new Error('Failed to fetch products. Status: ' + response.status);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  useEffect(() => {
    fetchProducts();

    const intervalId = setInterval(() => {
      SetTimer(prevTimer => {
        if (prevTimer === 100) {
          clearInterval(intervalId);
        }
        return prevTimer + 1;
      });
    }, 200);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
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
        <div className='Warning FarmerLogo'>
         
          <h4 className="Typing">Farmer List Loading....</h4>

          <h3 className='Text'>
            {Timer}% 
           </h3>
          
        </div>
      ) : (
        <div className="docs-list">
          {IsActive ?   (
            <div>
              {filteredProducts.map((product, index) => (
                <DocsItem key={index} Info={product} Eraise={OperationEraise} />
              ))}
            </div>
          ):(
            <h1 className="Typing">Farmers List Loading....</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
