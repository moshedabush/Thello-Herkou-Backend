import React from 'react';
import { connect } from 'react-redux';
// import { Link, NavLink } from "react-router-dom";
import { ReactComponent as BoardIcon } from '../assets/img/board-icon.svg';


// import routes from "../routes";
import {
  onLogin,
  onLogout,
  onSignup,
  loadUsers,
  removeUser,
} from '../store/user.actions.js';


class _HomeHeader extends React.Component {

  state = {
    isNavBgVisible: false
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
}

handleScroll = () => {
    const { isNavBgVisible } = this.state
    if (window.pageYOffset > 100 && !isNavBgVisible) {
        this.setState({ isNavBgVisible: true })
    } else if (window.pageYOffset < 100 && isNavBgVisible) {
        this.setState({ isNavBgVisible: false })
    }
}
  onLogin = (credentials) => {
    this.props.onLogin(credentials);
  };
  onSignup = (credentials) => {
    this.props.onSignup(credentials);
  };
  onLogout = () => {
    this.props.onLogout();
  };

  render() {
    const { isNavBgVisible } = this.state;
    return (
      <header className={`home-header ${isNavBgVisible ? 'visibleBg' : ''}`}>
        <nav className='flex justify-space-between'>
          <div className='logo'>
            <BoardIcon />
            Thello
          </div>
          <div className='nav-btns'>
            <a className='login-btn clean-link' href='/login'>
              Log in
            </a>
            <a className='signup-btn clean-link' href='/signup'>
              Sign up
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userModule.users,
    user: state.userModule.user,
    isLoading: state.systemModule.isLoading,
  };
}
const mapDispatchToProps = {
  onLogin,
  onSignup,
  onLogout,
  loadUsers,
  removeUser,
};

export const HomeHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_HomeHeader);
