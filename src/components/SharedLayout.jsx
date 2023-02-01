import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';
import logo from '../images/Logo.svg';

const Link = styled(NavLink)`
  position: relative;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  opacity: 0.5;

  transition: opacity var(--time-of-animation) var(--timing-function);

  &:hover,
  &:focus {
    opacity: 1;
  }

  &.active {
    font-weight: 800;
    opacity: 1;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 50px;
      background: var(--gradient-color);
    }
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header className="header container">
        <a href="/" className="logo">
          <img className="logo__icon" src={logo} alt="logo" />
        </a>
        <nav className="nav">
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
