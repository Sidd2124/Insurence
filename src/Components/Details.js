import React, { useState, useEffect } from 'react';
import DocsItem from "./DocsItems/Docsitems";
import { Link, Redirect } from 'react-router-dom';
import "react-phone-input-2/lib/style.css";
import Naresh from './Logo.png';
import Cookies from 'js-cookie';
import './styles.css';
import Header from '../Components/Header/Header'


import './Details.css'

const Details = () => {
 
  
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [FinellProducts, setFinelProducts] = useState([ {
    id: "",
    Name: "Naresh",
    Number: "",
    ImageURL: "https://i.ibb.co/4dcxwgY/Screenshot-2024-02-23-174428.png",
    InsurenceDocument: "",
    InsurenceDate: "",
    AdharDocumentFront: "",
    AdharDocumentBack: "",
    InsurenceNo: "",
    AavuFront: "",
    AavuBack: "",
    AavuRight: "",
    AavuLeft: ""
  }]);
  const [IsActive,SetActive]=useState(false)



  const OperationEraise=(J)=>{
const Operation=FinellProducts.filter((each)=>each.id!==J)

setFinelProducts(Operation)

  }

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3020/api', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        const products = await response.json();
     
        setFinelProducts(products);
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
