import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './SideMenu.css';
import flipkartLogo from '../../images/logo/flipkart.png';
import goldenStar from '../../images/logo/golden-star.png';
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from '../MaterialUI/MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login, signout, signup as _signup } from '../../actions/actionsIndex';
import Cart from '../../components/UI/Cart';
import { BiUser } from 'react-icons/bi';
import { uiConstants } from '../../reducers/UI';
import SideMenuDropdown from './SideMenuDropdown';

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const closeSideMenu = useSelector((state) => state.ui.closeSideMenu);

  const userSignup = () => {
    console.log({ name, surname, email, password });
    const user = { name, surname, email, password };
    if (name === '' || surname === '' || email === '' || password === '') {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="user">{auth.user.fullName}</a>}
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'SuperCoin Zone', href: '', icon: null },
          { label: 'Flipkart Plus Zone', href: '', icon: null },
          { label: 'Orders', href: '/account/orders', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'My Chats', href: '', icon: null },
          { label: 'Coupons', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Notifications', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'Logout', href: '', icon: null, onClick: logout },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a style={{ color: '#2874f0' }}>Sign Up</a>
          </div>
        }
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Login
          </a>
        }
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'Flipkart Plus Zone', href: '', icon: null },
          {
            label: 'Orders',
            href: '',
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: 'Wishlist', href: '/account/orders', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: '#2874f0' }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  const renderLoginModal = () => {
    return (
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Enter First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Enter Last Name"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                )}
                <MaterialInput
                  type="text"
                  label="Enter Email/Enter Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MaterialInput
                  type="password"
                  label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? 'Register' : 'Login'}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: '40px 0 20px 0',
                  }}
                  onClick={userLogin}
                />

                <p style={{ textAlign: 'center' }}>OR</p>

                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: '40px 0',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const renderRightSideMenu = () => {
    return (
      <div className="rightMenu">
        <div className="dash_options">
          {auth.authenticate && <BiUser className="icon_user" />}
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
        </div>
        <div
          onClick={() => dispatch({ type: uiConstants.SIDE_MENU_OPEN })}
          className="navicon_cont"
        >
          <img className="navicon" src="images/navicon-round.png" alt="" />
        </div>
        <DropdownMenu
          menu={
            <a className="more">
              <span>More</span>
              <IoIosArrowDown />
            </a>
          }
          menus={[
            { label: 'Notification Preference', href: '', icon: null },
            { label: 'Sell on flipkart', href: '', icon: null },
            { label: '24x7 Customer Care', href: '', icon: null },
            { label: 'Advertise', href: '', icon: null },
            { label: 'Download App', href: '', icon: null },
          ]}
        />
        <div>
          <a href="/cart" className="cart">
            <Cart count={Object.keys(cart.cartItems).length} />
            <span style={{ margin: '0 10px' }}>Cart</span>
          </a>
        </div>
      </div>
    );
  };

  const renderSideMenu = () => {
    return (
      <>
        <div
          onClick={() => dispatch({ type: uiConstants.SIDE_MENU_CLOSE })}
          className={closeSideMenu ? 'back-overlay' : 'back-overlay active'}
        ></div>
        <div className="side-menu-container">
          <div className={closeSideMenu ? `sidemenu` : 'sidemenu active'}>
            <div className="menu-navigation">
              <ul className="menu-nav-tabs">
                <li>
                  <a>Menu</a>
                </li>
                <li>
                  <a>Account</a>
                </li>
                <div
                  className="close_cont"
                  onClick={() =>
                    dispatch({ type: uiConstants.SIDE_MENU_CLOSE })
                  }
                >
                  <img className="close_icon" src="images/close.png" alt="" />
                </div>
              </ul>
            </div>
            <div className="menu_option">
              <SideMenuDropdown />
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderHeader = () => {
    return (
      <div className="header">
        {renderSideMenu()}
        {renderLoginModal()}
        <div className="subHeader">
          {/* Logo */}
          <div className="logo">
            <a href="">
              <img src={flipkartLogo} className="logoimage" alt="" />
            </a>
            <a style={{ marginTop: '-10px' }}>
              <span className="exploreText">Explore</span>
              <span className="plusText">Plus</span>
              <img src={goldenStar} className="goldenStar" alt="" />
            </a>
          </div>
          {/* Logo End */}

          {/* Search component */}
          <div className="searchBlock">
            <div className="searchInputContainer">
              <input
                className="searchInput"
                placeholder={'search for products, brands and more'}
              />
              <div className="searchIconContainer">
                <IoIosSearch
                  style={{
                    color: '#2874f0',
                  }}
                />
              </div>
            </div>
          </div>
          {/* Search Component End */}

          {/* Right side menu */}
          {renderRightSideMenu()}
          {/* Right side menu end */}
        </div>
      </div>
    );
  };

  return renderHeader();
};

export default Header;
