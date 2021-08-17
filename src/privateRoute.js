import React from 'react'
import { useUserContext } from "./contexts/useUserContext"
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {

  const {user} = useUserContext()

  return (
    <Route
      {...rest}
      render={props =>
        user !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
