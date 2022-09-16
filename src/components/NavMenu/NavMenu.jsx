import { React, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";

import { setPage } from '../../redux/ui/actions';
import { clearUserData, setAuthState } from '../../redux/user/actions';
import { selectPage } from '../../redux/ui/selectors';

import logo from '../../assets/logo.svg';

import './NavMenu.css'

export const NavMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const page = useSelector(selectPage)

  const isActive = useMemo(() => 
    (value) => 'navigation-button ' + ((value === page) ? 'active' : ''), [page])

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  const onClickExit = useCallback(() => {
    dispatch(clearUserData())
    dispatch(setAuthState(false))

    changeState('Auth')
    navigate('/')
  }, [changeState, dispatch, navigate])
  
  return (
    <header data-testid='nav-menu-component' className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className='navigation-menu'>
        <ul className="navigation-items">
          <li className='navigation-item'>
            <Link to="/map">
              <button type="button" className={isActive('Map')} onClick={() => changeState("Map")}>Карта</button>
            </Link>
          </li>
          <li className='navigation-item'>
            <button data-testid='exit-button' type="button" className={isActive('Auth')} onClick={onClickExit}>Выйти</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
