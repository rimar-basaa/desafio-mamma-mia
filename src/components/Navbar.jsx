import { CgShoppingCart } from "react-icons/cg";
import flag from "../assets/flag.png";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { ContextAPI } from '../context/ContextApi';

const Navbar = () => {

    const { total } = useContext(ContextAPI);

    return (
        <div className="navbar">
            <Link to={'/home'}>
                <div className="navlog">
                    <img src={flag} alt="bandera" />                     
                    <h3>Mamma Mia!</h3>                    
                </div>
            </Link>
            <div className="navlink">
                <NavLink to={'/home'}>Home</NavLink>
                <p> | </p> 
                <NavLink to={'/carrito'}>Compra</NavLink>
            </div>               
            <Link to={'/carrito'}>
                <div className="navcar">
                    <CgShoppingCart />
                    <p>$ {total}</p>
                </div>
            </Link>                    
        </div>
    );
};

export default Navbar;