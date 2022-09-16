import { React, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { TextField } from '@mui/material';

import { setPage } from '../../redux/ui/actions';
import { registrationAction } from '../../redux/user/actions';
import { selectSignInData } from '../../redux/user/selectors';

import logo from "../../assets/logo-login.svg"

import './Registration.css'

export const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isSignIn = useSelector(selectSignInData)

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  useEffect(() => {
    if (isSignIn) {
      navigate('/map')
      changeState('Map')
    }
  }, [isSignIn, navigate, changeState])

  const registrate = (event) => {
    event.preventDefault();

    const payload = {
      payloadEmail: event.target.email.value,
      payloadName: event.target.name.value,
      payloadSurname : event.target.name.value,
      payloadPassword: event.target.password.value,
    }

    dispatch(registrationAction(payload))
  }

  return (
    <div data-testid="registration-page" className="login-page">
      <div className="login__left-column">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
      <div className="login__right-column">
        <div className="right-column__content">
          <div className="form-content">
            <div className="registration">
              Зарегистрироваться
            </div>
            <form onSubmit={registrate} className="form">
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
                  id="name" 
                  type='text' 
                  name="name" 
                  label="Как вас зовут?" 
                  focused 
                  sx={{
                    marginBottom: 3,
                    width: 350,
                  }}
                />
                <TextField
                  id="password" 
                  type='password' 
                  name="password" 
                  label="Придумайте пароль" 
                  focused 
                  sx={{
                    marginBottom: 3,
                    width: 350,
                  }}
                />
                <button type="submit" className="btn-login">Зарегистрироваться</button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
