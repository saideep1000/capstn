import {Fragment  ,  useContext  } from 'react';
import {Outlet,Link} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.stles.scss';
import {  UserContext  }  from '../../contexts/user.context';
import { CartContext  } from '../../contexts/cart.context';
import {signOutUser} from '../../utils/firebase/firebase.utils'


const Navigation=()=>{
   
     const  {  currentUser  } = useContext(UserContext);
     //console.log(currentUser);

     const {isCartOpen,setIsCartOpen} = useContext(CartContext);
     
    return (
      <Fragment>
          <div className='navigation'>
             <Link className='logo-container' to='/'>
                  <CrwnLogo className='logo' />
             </Link>
              
               <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    {
                         currentUser ? (
                              <span className='nav-link'  onClick={signOutUser}>Sign Out</span>
                         ):(
                              <Link className='nav-link' to='/auth'>SignIn</Link>
                         )
                    }
                    <CartIcon />
               </div>
               {isCartOpen && <CartDropdown /> }
          </div>
          <Outlet/>
          </Fragment>
    )
  }

  export default Navigation;