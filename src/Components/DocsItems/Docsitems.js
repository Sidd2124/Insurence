import React, { useContext } from "react";
import "./Docs.css";
import Context from "../Context/Context";

const DocsItem = (props) => {
  const { Info,Eraise }=props
  const {
    id,
    Name,
    Number,
    ImageURL,
    InsuranceDocument,
    InsuranceDate,
    AdharDocumentFront,
    AdharDocumentBack,
    InsurenceNo,
    AavuFront,
    AavuBack,
    AavuRight, 
    AavuLeft,
  } = Info;
  const { FinelRemove, RemoveingKarshak } = useContext(Context);




// Original string containing date and time
var dateTimeString = InsuranceDate;

// Parse the string into a Date object
var dateTime = new Date(dateTimeString);

// Extract just the date portion
var date = dateTime.toISOString().slice(0, 10);





  const handleRemove = () => {
    FinelRemove(id);
    Eraise(id)
    RemoveingKarshak({
      Name,
      Number,
      date,
    });
  };

  const oneYearFromInsurenceDate = new Date(date);
  oneYearFromInsurenceDate.setFullYear(oneYearFromInsurenceDate.getFullYear() + 1);

  const currentDate = new Date();

  if (currentDate > oneYearFromInsurenceDate) {
    FinelRemove(id); 
    RemoveingKarshak({
      Name,
      Number,
      InsuranceDate,
    });
    
  }


  
  
  
  

  return (
    <div className="responsive-container">
      <img src={ImageURL} alt="Former" className="former-pic" />
      <div className="details">
        <h1 className="former-name">{Name}</h1>
        <p className="former-number">Mobile Number: {Number}</p>
        <p className="insurance-status">InsurenceNo: {InsurenceNo}</p>
        <p>Insurance Date: {date}</p>
        <div className="ButtonContainer">
        <div className="Button">
          <button className="download-btn"><a href={InsuranceDocument} rel="noreferrer" target="_blank" download={`${Name}_Insurence_Copey`}>DownLoadInsurenceDocument</a></button>
          <button onClick={handleRemove} className="download-btn">
            Remove Former
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AdharDocumentFront} download={`${Name}_Adhar_Front_Pic`}>AdharFront Download</a></button>
          <button  className="download-btn">
          <a href={AdharDocumentBack} download={`${Name}_Adhar_Back_Pic`}>AdharBack Download</a>
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AavuFront} download={`${Name}_Cow_Front_Pic`}>Cow Front Pic</a></button>
          <button  className="download-btn">
          <a href={AavuBack} download={`${Name}_Cow_Back_Pic`}>Cow Back</a>
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AavuRight} download={`${Name}_Cow_Right_Pic`}>Cow Right Pic</a></button>
          <button  className="download-btn">
          <a href={AavuLeft} download={`${Name}_Cow_Left_Pic`}>Cow Left Pic</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DocsItem;
