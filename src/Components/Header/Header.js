import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import './Header.css';
import { CiLogin } from "react-icons/ci";
import Cookies from 'js-cookie';

class Header extends Component {
    onClickLogout = () => {
        Cookies.remove('Token');
        const { history } = this.props;
        history.replace('/Login');
    }

    render() {
        return (
            <div className='TopHeader'>
                <Link to="/" className="Link">
                    <button className='Buttons'>Home</button>
                </Link>
                <Link to="/Entries" className="Link">
                    <button className='Buttons'>New Farmer</button>
                </Link>
                <Link to="/RemovesFarmers" className="Link">
                    <button className='Buttons'> Removed Farmer's</button>
                </Link>
                <button className='Buttons' onClick={this.onClickLogout}><CiLogin/></button>
            </div>
        );
    }
}

export default withRouter(Header); 