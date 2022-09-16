import { React, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { selectSignInData } from '../../redux/user/selectors';
import { setPage } from '../../redux/ui/actions';

import { NavMenu } from "../NavMenu/NavMenu";

import { Mapbox } from "./Mapbox";

import './Map.css'

export const Map = () => {
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
    } else {
      navigate ('/')
      changeState('Auth')
    }
  }, [isSignIn, navigate, changeState])

  return (
    <div data-testid='map-page' className="map-page">
      <NavMenu activeItem='Map' />
      <div className="map-container">
        <Mapbox />
      </div>
    </div>
  )
}
