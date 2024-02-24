import React, { useContext } from "react";
import "./Docs.css";
import Context from "../Context/Context";

const DocsItem = (props) => {
  const { Info,Eraise }=props
  const {
    name,
    Number,
    insurenceDocument,
    InsurenceDate,
    imageURL,
    id,
    AdharDocumentFront,
    AdharDocumentBack,
    InsurenceNo,
    AavuFront,
    AavuBack,
    AavuRight,
    AavuLeft
  } = Info;
  const { FinelRemove, RemoveingKarshak } = useContext(Context);


  const handleRemove = () => {
    FinelRemove(id);
    Eraise(id)
    RemoveingKarshak({
      name,
      Number,
      InsurenceDate,
    });
  };

  const oneYearFromInsurenceDate = new Date(InsurenceDate);
  oneYearFromInsurenceDate.setFullYear(oneYearFromInsurenceDate.getFullYear() + 1);

  const currentDate = new Date();

  if (currentDate > oneYearFromInsurenceDate) {
    FinelRemove(id); 
    RemoveingKarshak({
      name,
      Number,
      InsurenceDate,
    });
    
  }


  
  
  
  

  return (
    <div className="responsive-container">
      <img src={imageURL} alt="Former" className="former-pic" />
      <div className="details">
        <h1 className="former-name">{name}</h1>
        <p className="former-number">Mobile Number: {Number}</p>
        <p className="insurance-status">Insurance Number: {InsurenceNo}</p>
        <p>Insurance Date: {String(InsurenceDate).split("-").reverse().join("-")}</p>
        <div className="ButtonContainer">
        <div className="Button">
          <button className="download-btn"><a href={insurenceDocument} download={`${name}_Insurence_Copey`}>DownLoadInsurenceDocument</a></button>
          <button onClick={handleRemove} className="download-btn">
            Remove Former
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AdharDocumentFront} download={`${name}_Adhar_Front_Pic`}>AdharFront Download</a></button>
          <button  className="download-btn">
          <a href={AdharDocumentBack} download={`${name}_Adhar_Back_Pic`}>AdharBack Download</a>
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AavuFront} download={`${name}_Cow_Front_Pic`}>Cow Front Pic</a></button>
          <button  className="download-btn">
          <a href={AavuBack} download={`${name}_Cow_Back_Pic`}>Cow Back</a>
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AavuRight} download={`${name}_Cow_Right_Pic`}>Cow Right Pic</a></button>
          <button  className="download-btn">
          <a href={AavuLeft} download={`${name}_Cow_Left_Pic`}>Cow Left Pic</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DocsItem;
