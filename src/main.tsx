import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import fileUrl from './assets/cover.jpg'
import RemoteMarkdown from './Markdown.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <App>
                            <img src={fileUrl} style={{float: "right"}} />
                            <RemoteMarkdown src="/french2-site/main.md"/>
                        </App>
                    </>
                }/>
                <Route path="/funnies" element={
                    <App>
                        <img src="/french2-site/1.png" />
                        <img src="/french2-site/2.png" />
                        <img src="/french2-site/3.png" />
                    </App>
                }></Route>
                <Route path="/passe-avoir-written" element={<App><RemoteMarkdown src="/french2-site/passe-avoir-written.md"/></App>}></Route>
                <Route path="/passe-avoir-written-key" element={<App><RemoteMarkdown src="/french2-site/passe-avoir-written-key.md"/></App>}></Route>
                <Route path="*" element={<App>404 Page not found</App>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
