import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import fileUrl from './assets/cover.jpg'
import RemoteMarkdown from './Markdown.tsx'

import main_md from './assets/main.md'
import passe_avoir_md from './assets/passe-avoir.md'
import passe_avoir_oral_md from './assets/passe-avoir-oral.md'
import passe_avoir_written_1_md from './assets/passe-avoir-written-1.md'
import passe_avoir_written_2_md from './assets/passe-avoir-written-2.md'
import passe_avoir_written_key_md from './assets/passe-avoir-written-key.md'
import Test from './Test.tsx'

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
                            <img src="/french2-site/1.png" />
                            <img src="/french2-site/2.png" />
                            <img src="/french2-site/3.png" />
                            <img src="/french2-site/4.jpg" />
                        </div>
                    </App>
                }></Route>
                <Route path="/passe-avoir" element={<App><RemoteMarkdown src={passe_avoir_md} /></App>}></Route>
                <Route path="/passe-avoir-oral" element={<App><RemoteMarkdown src={passe_avoir_oral_md} /></App>}></Route>
                <Route path="/passe-avoir-written-1" element={<App><RemoteMarkdown src={passe_avoir_written_1_md} /></App>}></Route>
                <Route path="/passe-avoir-written-2" element={<App><RemoteMarkdown src={passe_avoir_written_2_md} /></App>}></Route>
                <Route path="/passe-avoir-written-key" element={<App><RemoteMarkdown src={passe_avoir_written_key_md} /></App>}></Route>
                <Route path="/futur-test" element={<App><Test questions={[{question: "Question 1", answers: ["1", "2", "3"], correct: 1}]}></Test></App>}></Route>
                <Route path="*" element={<App>404 Page not found</App>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
