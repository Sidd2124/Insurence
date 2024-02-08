import {Link} from 'react-router-dom'
import './Header.css'
import { CiLogin } from "react-icons/ci";

const Header=()=>{
    return(
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

<button className='Buttons'> <CiLogin/></button>
        </div>
    )
}

export default Header