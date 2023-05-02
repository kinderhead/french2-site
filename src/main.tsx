import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import fileUrl from './assets/cover.jpg'
import RemoteMarkdown from './Markdown.tsx'

import main_md from './assets/main.md'
import passe_avoir_written_md from './assets/passe-avoir-written.md'
import passe_avoir_written_key_md from './assets/passe-avoir-written-key.md'
import { Stack } from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <App>
                            <img src={fileUrl} style={{float: "right"}} />
                            <RemoteMarkdown src={main_md} />
                        </App>
                    </>
                }/>
                <Route path="/funnies" element={
                    <App>
                        <div className="small-img">
                            <Stack gap={3} direction="horizontal">
                                <img src="/french2-site/1.png" />
                                <img src="/french2-site/2.png" />
                                <img src="/french2-site/3.png" />
                            </Stack>
                        </div>
                    </App>
                }></Route>
                <Route path="/passe-avoir-written" element={<App><RemoteMarkdown src={passe_avoir_written_md} /></App>}></Route>
                <Route path="/passe-avoir-written-key" element={<App><RemoteMarkdown src={passe_avoir_written_key_md} /></App>}></Route>
                <Route path="*" element={<App>404 Page not found</App>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
