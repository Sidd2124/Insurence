import React, { useContext } from "react";
import "./Docs.css";
import Context from "../Context/Context";

const DocsItem = ({ Info }) => {
  const {
    Name,
    Number,
    InsurenceStatus,
    InsurenceDocument,
    InsurenceDate,
    ImageURL,
    id,
  } = Info;
  const { FinelRemove, RemoveingKarshak } = useContext(Context);
  console.log(ImageURL)

  const handleRemove = () => {
    FinelRemove(id);
    RemoveingKarshak({
      Name,
      Number,
      ImageURL,
      InsurenceDocument,
      InsurenceStatus,
      InsurenceDate,
    });
  };

  const oneYearFromInsurenceDate = new Date(InsurenceDate);
  oneYearFromInsurenceDate.setFullYear(oneYearFromInsurenceDate.getFullYear() + 1);

  const currentDate = new Date();

  if (currentDate > oneYearFromInsurenceDate) {
    FinelRemove(id); 
  }

  return (
    <div className="responsive-container">
      {ImageURL && typeof ImageURL === "string" ? (
        <img src={ImageURL} alt="Former Pic" className="former-pic" />
      ) : (
        <p>No image available</p>
      )}

      <div className="details">
        <h1 className="former-name">{Name}</h1>
        <p className="former-number">Mobile Number: {Number}</p>
        <p className="insurance-status">Insurance Status: {InsurenceStatus}</p>
        <p>Insurance Date: {String(InsurenceDate).split("-").reverse().join("-")}</p>

        <div className="Button">
          {InsurenceDocument && typeof InsurenceDocument === "string" ? (
            <button className="download-btn">
              <a href={InsurenceDocument} download={`${Name}_insurence_Copy`}>
                Download Document
              </a>
            </button>
          ) : (
            <p>No document available</p>
          )}
          <button onClick={handleRemove} className="download-btn">
            Remove Former
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocsItem;
