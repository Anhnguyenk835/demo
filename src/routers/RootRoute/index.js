import React from 'react'
import {  useRoutes } from 'react-router'
import Home from '../../page/home'
import Following from '../../page/following'
import { Outlet } from 'react-router'
const RootRoute = () => {
    return useRoutes([
        {
            path: '',
            element: <Outlet />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'following',
                    element: <Following />
                }
            ]
        }
    ])
}

export default RootRoute