import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/french2-site" element={<App>French website :)<br/>New line</App>}/>
                <Route path="*" element={<App>404 Page not found</App>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
