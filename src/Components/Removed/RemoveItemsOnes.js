import { useState,useEffect } from "react"

const RemoveItemOnes = ({ Info }) => {
  const {
    Name,
    Number,
    InsurenceStatus,
    InsurenceDocument,
    InsurenceDate,
    ImageURL,
    
  } = Info;
const [Photo,SetPhoto]=useState("")


  useEffect(() => {

    if (ImageURL) {
      
      fetch(ImageURL)
        .then(response => response.blob(ImageURL)) 
        .then(blob => {
          
          const reader = new FileReader();
          reader.onload = () => {
            const dataUrl = reader.result;
            SetPhoto(dataUrl);
          };
          reader.readAsDataURL(blob);
        })
        .catch(error => {
          console.error('Error fetching image:', error);
        });
    }
  });

 


 

  return (
    <div className="responsive-container">
    
        <img src={Photo} alt="Former Pic" className="former-pic" />
     

      <div className="details">
        <h1 className="former-name">{Name}</h1>
        <p className="former-number">Mobile Number: {Number}</p>
        <p className="insurance-status">Insurance Status: {InsurenceStatus}</p>
        <p>Insurance Date: {String(InsurenceDate).split("-").reverse().join("-")}</p>

        <div className="Button">
          {InsurenceDocument ? (
            <button className="download-btn">
              <a href={InsurenceDocument} download={`${Name}_insurence_Copy`}>
                Download Document
              </a>
            </button>
          ) : (
            <p>No document available</p>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default RemoveItemOnes;
