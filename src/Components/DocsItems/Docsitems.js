import React, { useContext } from 'react';
import './Docs.css';
import Context from '../Context/Context';

const DocsItem = ({ Info }) => {
    const { Name, Number, InsurenceStatus, InsurenceDocument, InsurenceDate, ImageURL, id } = Info;
    const { FinelRemove, RemoveingKarshak } = useContext(Context);

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

    return (
        <div className="responsive-container">
            <img src={ImageURL} alt="Former Pic" className="former-pic" />
            <div className="details">
                <h1 className="former-name">{Name}</h1>
                <p className="former-number">Mobile Number: {Number}</p>
                <p className="insurance-status">Insurance Status: {InsurenceStatus}</p>
                <p>Insurance Date: {InsurenceDate}</p>
                {InsurenceDocument ? (
                    <a href={InsurenceDocument} download={`${Name}_insurence_Copy`}>Download Document</a>
                ) : (
                    <p>No document available</p>
                )}
                <div className='Button'>
                    <button onClick={handleRemove} className="download-btn">Remove Former</button>
                </div>
            </div>
        </div>
    );
};

export default DocsItem;
