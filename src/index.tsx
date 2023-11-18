import React from "react"

import { ChakraBaseProvider } from "@chakra-ui/react"
import ReactDOM from "react-dom/client"

import { RouterProvider } from "react-router-dom"

import reportWebVitals from "./reportWebVitals"

import { router } from "./routers"
import { themeDark } from "./theme"
// import {themeDefault} from './theme'


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <ChakraBaseProvider theme={themeDark}>
            <RouterProvider router={router} />
        </ChakraBaseProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
