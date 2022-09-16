import { React, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';

import { setPage } from '../../redux/ui/actions';
import { authenticateAction } from '../../redux/user/actions';
import { selectSignInData } from '../../redux/user/selectors';

import logo from "../../assets/logo-login.svg"

import './Auth.css'

export const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isSignIn = useSelector(selectSignInData)

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  const onSubmitForm = (event) => {
    event.preventDefault()

    const { email, password } = event.target

    const payload = {
      payloadEmail: email.value,
      payloadPassword: password.value
    }

    dispatch(authenticateAction(payload))
  }

  const onClickRegistrationButton = useCallback(() => {
    changeState("Registration");
    navigate('/registration')
  }, [changeState, navigate])

  useEffect(() => {
    if (isSignIn) {
      navigate('/map')
      changeState('Map')
    }
  }, [isSignIn, navigate, changeState])

  return (
    <div data-testid="auth-page" className="login-page">
      <div className="login__left-column">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
      <div className="login__right-column">
        <div className="right-column__content">
          <div className="form-content">
            <div className="enter">
              Авторизация
            </div>
            <form data-testid="form-auth-page" onSubmit={onSubmitForm} className="form">
              <div className="form__left-column">
                <TextField
                  id="email" 
                  type='email' 
                  name="email" 
                  label="Email" 
                  focused 
                  sx={{
                    marginTop: 3,
                    marginBottom: 3,
                    width: 350,
                  }}
                />
                <TextField
                  id="password" 
                  type='password' 
                  name="password" 
                  label="Password" 
                  focused 
                  sx={{
                    marginBottom: 3,
                    width: 350,
                  }}
                />
                <button data-testid="submit-button" type="submit" className="btn-login">Войти</button>
              </div>
            </form>
            <div className="new-profile">
              <div className="new-profile__text">Новый пользователь?</div>
              <button data-testid="new-profile-btn"  className="new-profile-btn" type="button" onClick={onClickRegistrationButton}>Регистрация</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
