import {Fragment, useContext} from "react";
import {Outlet,Link} from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utils/firebase/firebase";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles.jsx";



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
        <NavigationContainer>
        <LogoContainer  to="/">
        
            <img width="90" height="80" src="https://img.icons8.com/hands/100/clothes.png" alt="clothes"/>
            
            {/* <img width="48" height="48" src="https://img.icons8.com/color/48/cookie-monster.png" alt="cookie-monster"/>
            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/cookie-monster.png" alt="cookie-monster"/>
            <img width="48" height="48" src="https://img.icons8.com/deco-glyph/48/crown.png" alt="crown"/>
            <img width="48" height="48" src="https://img.icons8.com/badges/48/crown-of-thorns.png" alt="crown-of-thorns"/>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/medieval-crown.png" alt="medieval-crown"/> */}
            </LogoContainer>
            
            <NavLinks>
            <NavLink  to='/shop'>SHOP</NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>
            ) : (
              <NavLink  to="/auth">SIGN IN</NavLink>
            )}
            <CartIcon/>
           
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;