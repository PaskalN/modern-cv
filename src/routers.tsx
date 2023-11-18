import React from "react"
import { RouteObject, createBrowserRouter } from "react-router-dom"

import App from "./components/app"
import Home from "./pages/home"

const AppWrapper = (Component: React.FC): React.FC => {
    const wrapper: React.FC = () => {
        return (
            <App>
                <Component />
            </App>
        )
    }

    return wrapper
}

const routers: RouteObject[] = [
    {
        path: "/",
        Component: AppWrapper(Home)
    }
]

export const router = createBrowserRouter(routers)
