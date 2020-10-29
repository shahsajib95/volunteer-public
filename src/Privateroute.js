import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoggedIn } from './App';

const Privateroute = ({ children, ...rest }) => {
    const [loggedIn] = useContext(LoggedIn);
    return (
        <>
            <Route
                {...rest}
                render={({ location }) =>
                loggedIn.email ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />

        </>
    )

};

export default Privateroute;