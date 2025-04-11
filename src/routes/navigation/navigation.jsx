import {Fragment, useContext} from "react";
import {Outlet,Link} from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.scss";



const Navigation = () => {
  const{currentUser, setCurrentUser} = useContext(UserContext);
  const{isCartOpen} = useContext(CartContext);

  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null)
  }

  console.log(currentUser);
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
            <img  className="logo" width="100" height="100" src="https://img.icons8.com/hands/100/clothes.png" alt="clothes"/>
            {/* <img width="48" height="48" src="https://img.icons8.com/color/48/cookie-monster.png" alt="cookie-monster"/>
            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/cookie-monster.png" alt="cookie-monster"/>
            <img width="48" height="48" src="https://img.icons8.com/deco-glyph/48/crown.png" alt="crown"/>
            <img width="48" height="48" src="https://img.icons8.com/badges/48/crown-of-thorns.png" alt="crown-of-thorns"/>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/medieval-crown.png" alt="medieval-crown"/> */}
            </Link>
            
            <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>SHOP</Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to="/auth">SIGN IN</Link>
            )}
            <CartIcon/>
           
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;