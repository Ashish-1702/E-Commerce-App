import Logo from "../assests/images/e commerce.webp";
import { Link } from "react-router-dom";

const Title=()=>{
    return(
        <div>
            <img className="logo" src={Logo}/>
        </div>
    )
}

const Header=()=>{
    return(
        <div className="header">
           <Title/>
            <input type="text" className="search-dress" placeholder="Search any dress" />
            <ul className="navlinks">
                <Link to="">
                   <li>Home</li>
                </Link>
                <Link to="/about">
                   <li>About</li>
                </Link>
                 <Link to="/contact">
                   <li>Contact</li>
                 </Link>
                <Link to="/cart">
                  <li>Cart</li>
                </Link>
            </ul>
        </div>
    )
}
export default Header;