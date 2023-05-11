import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import fileUrl from './assets/cover.jpg'
import RemoteMarkdown from './Markdown.tsx'

import main_md from './assets/main.md'
import passe_avoir_md from './assets/passe-avoir.md'
import passe_avoir_oral_1_md from './assets/passe-avoir-oral-1.md'
import passe_avoir_oral_2_md from './assets/passe-avoir-oral-2.md'
import passe_avoir_written_1_md from './assets/passe-avoir-written-1.md'
import passe_avoir_written_2_md from './assets/passe-avoir-written-2.md'
import passe_avoir_written_3_md from './assets/passe-avoir-written-3.md'
import passe_avoir_written_4_md from './assets/passe-avoir-written-4.md'
import passe_avoir_cheatsheet_md from './assets/passe-avoir-cheatsheet.md'
import passe_avoir_written_key_md from './assets/passe-avoir-written-key.md'
import futur_written_1_md from './assets/futur-written-1.md'
import futur_written_2_md from './assets/futur-written-2.md'
import futur_written_key_md from './assets/futur-written-key.md'
import futur_written_quiz_md from './assets/futur-written-quiz.md'
import futur_oral_1_md from './assets/futur-oral-1.md'
import futur_oral_2_md from './assets/futur-oral-2.md'
import futur_oral_3_md from './assets/futur-oral-3.md'
import futur_cheatsheet_md from './assets/futur-cheatsheet.md'
import futur_md from './assets/futur.md'
import futur_test_md from './assets/futur-test.md'
import imparfait_md from './assets/imparfait.md'
import imparfait_oral_1_md from './assets/imparfait-oral-1.md'
import imparfait_oral_2_md from './assets/imparfait-oral-2.md'
import imparfait_written_1_md from './assets/imparfait-written-1.md'
import imparfait_written_key_md from './assets/imparfait-written-key.md'
import conditionnel_md from './assets/conditionnel.md'
import conditionnel_oral_1_md from './assets/conditionnel-oral-1.md'
import conditionnel_oral_2_md from './assets/conditionnel-oral-2.md'
import conditionnel_written_1_md from './assets/conditionnel-written-1.md'
import conditionnel_written_2_md from './assets/conditionnel-written-2.md'
import conditionnel_written_key_md from './assets/conditionnel-written-key.md'
import pronoms_description_md from './assets/pronoms-description.md'
import pronoms_written_1_md from './assets/pronoms-written-1.md'
import pronoms_written_2_md from './assets/pronoms-written-2.md'
import pronoms_written_key_md from './assets/pronoms-written-key.md'
import pronoms_oral_1_md from './assets/pronoms-oral-1.md'
import pronoms_test_md from './assets/pronoms-test.md'
import subjonctif_md from './assets/subjonctif.md'
import subjonctif_oral_1_md from './assets/subjonctif-oral-1.md'
import subjonctif_oral_2_md from './assets/subjonctif-oral-2.md'
import subjonctif_written_1_md from './assets/subjonctif-written-1.md'
import subjonctif_written_2_md from './assets/subjonctif-written-2.md'
import literary_md from './assets/literary.md'
import literary_oral_1_md from './assets/literary-oral-1.md'
import literary_oral_2_md from './assets/literary-oral-2.md'
import literary_written_1_md from './assets/literary-written-1.md'
import literary_written_key_md from './assets/literary-written-key.md'
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
                            <img src="/french2-site/5.png" />
                            <img src="/french2-site/6.png" />
                            <img src="/french2-site/7.jpg" />
                            <img src="/french2-site/8.jpg" />
                            <img src="/french2-site/9.png" />
                            <img src="/french2-site/10.png" />
                            <img src="/french2-site/11.png" />
                            <img src="/french2-site/12.png" />
                            <img src="/french2-site/13.png" />
                            <img src="/french2-site/14.png" />
                            <img src="/french2-site/15.png" />
                            <img src="/french2-site/16.png" />
                        </div>
                    </App>
                }></Route>
                <Route path="/passe-avoir" element={<App><RemoteMarkdown src={passe_avoir_md} /></App>}></Route>
                <Route path="/passe-avoir-oral-1" element={<App><RemoteMarkdown src={passe_avoir_oral_1_md} /></App>}></Route>
                <Route path="/passe-avoir-oral-2" element={<App><RemoteMarkdown src={passe_avoir_oral_2_md} /></App>}></Route>
                <Route path="/passe-avoir-written-1" element={<App><RemoteMarkdown src={passe_avoir_written_1_md} /></App>}></Route>
                <Route path="/passe-avoir-written-2" element={<App><RemoteMarkdown src={passe_avoir_written_2_md} /></App>}></Route>
                <Route path="/passe-avoir-written-3" element={<App><RemoteMarkdown src={passe_avoir_written_3_md} /></App>}></Route>
                <Route path="/passe-avoir-written-4" element={<App><RemoteMarkdown src={passe_avoir_written_4_md} /></App>}></Route>
                <Route path="/passe-avoir-cheatsheet" element={<App><RemoteMarkdown src={passe_avoir_cheatsheet_md} /></App>}></Route>
                <Route path="/passe-avoir-written-key" element={<App><RemoteMarkdown src={passe_avoir_written_key_md} /></App>}></Route>
                <Route path="/futur-test" element={<App><RemoteMarkdown src={futur_test_md} /><Test questions={[{"question": "Je manger", "answers": ["Je mange", "Je mangerons", "Je mangerai", "Je mangere"], "correct": 2}, {"question": "Tu faire", "answers": ["Tu fairas", "Tu fera", "Tu faira", "Tu feras"], "correct": 3}, {"question": "Nous dormir", "answers": ["Nous dormirions", "Nous dormiron", "Nous dormirons", "Nous dormons"], "correct": 2}, {"question": "Vous \u00eatre", "answers": ["Vous serez", "Vous seriez", "Vous êtez", "Vous êtrez"], "correct": 0}, {"question": "Ils voyager", "answers": ["Ils voyagent", "Ils voyageont", "Ils voyageront", "Ils voyagerent"], "correct": 2}, {"question": "Je aller", "answers": ["Je irai", "Je aurai", "Je arai", "Je aurai"], "correct": 0}, {"question": "Tu travailler", "answers": ["Tu travaillas", "Tu travailleras", "Tu travailla", "Tu travaillera"], "correct": 1}, {"question": "Elle avoir", "answers": ["Elle auras", "Elle aurai", "Elle aura", "Elle aure"], "correct": 2}, {"question": "Nous acheter", "answers": ["Nous acheterons", "Nous aucherons", "Nous acheterions", "Nous aucherions"], "correct": 0}, {"question": "Je pouvoir", "answers": ["Je pourrons", "Je pourai", "Je pourons", "Je pourrai"], "correct": 3}, {"question": "Vous venir", "answers": ["Vous venez", "Vous vienez", "Vous viendrez", "Vous veidez"], "correct": 2}, {"question": "Tu danser", "answers": ["Tu dansas", "Tu dansera", "Tu danseras", "Tu danse"], "correct": 2}, {"question": "Elles compter", "answers": ["Elles comeront", "Elles comperent", "Elles compteront", "Elles compterent"], "correct": 2}, {"question": "Tu appeler", "answers": ["tu appeles", "tu appelas", "tu appeleras", "tu appeleres"], "correct": 2}, {"question": "Elles decider", "answers": ["Elles decide", "Elles decident", "Elles decideront", "Elles deciderent"], "correct": 2}]}></Test></App>}></Route>
                <Route path="/futur-written-1" element={<App><RemoteMarkdown src={futur_written_1_md} /></App>}></Route>
                <Route path="/futur-written-2" element={<App><RemoteMarkdown src={futur_written_2_md} /></App>}></Route>
                <Route path="/futur-written-key" element={<App><RemoteMarkdown src={futur_written_key_md} /></App>}></Route>
                <Route path="/futur-written-quiz" element={<App><RemoteMarkdown src={futur_written_quiz_md} /></App>}></Route>
                <Route path="/futur-oral-1" element={<App><RemoteMarkdown src={futur_oral_1_md} /></App>}></Route>
                <Route path="/futur-oral-2" element={<App><RemoteMarkdown src={futur_oral_2_md} /></App>}></Route>
                <Route path="/futur-oral-3" element={<App><RemoteMarkdown src={futur_oral_3_md} /></App>}></Route>
                <Route path="/futur-cheatsheet" element={<App><RemoteMarkdown src={futur_cheatsheet_md} /></App>}></Route>
                <Route path="/futur-description" element={<App><RemoteMarkdown src={futur_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait" element={<App><RemoteMarkdown src={imparfait_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-oral-1" element={<App><RemoteMarkdown src={imparfait_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-oral-2" element={<App><RemoteMarkdown src={imparfait_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-written-1" element={<App><RemoteMarkdown src={imparfait_written_1_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-written-key" element={<App><RemoteMarkdown src={imparfait_written_key_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel" element={<App><RemoteMarkdown src={conditionnel_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel-oral-1" element={<App><RemoteMarkdown src={conditionnel_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel-oral-2" element={<App><RemoteMarkdown src={conditionnel_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel-written-1" element={<App><RemoteMarkdown src={conditionnel_written_1_md} /></App>}></Route>
                <Route path="/conditionnel-written-2" element={<App><RemoteMarkdown src={conditionnel_written_2_md} /></App>}></Route>
                <Route path="/conditionnel-written-key" element={<App><RemoteMarkdown src={conditionnel_written_key_md} /></App>}></Route>
                <Route path="/pronoms-description" element={<App><RemoteMarkdown src={pronoms_description_md} /></App>}></Route>
                <Route path="/pronoms-written-1" element={<App><RemoteMarkdown src={pronoms_written_1_md} /></App>}></Route>
                <Route path="/pronoms-written-2" element={<App><RemoteMarkdown src={pronoms_written_2_md} /></App>}></Route>
                <Route path="/pronoms-written-key" element={<App><RemoteMarkdown src={pronoms_written_key_md} /></App>}></Route>
                <Route path="/pronoms-oral-1" element={<App><RemoteMarkdown src={pronoms_oral_1_md} /></App>}></Route>
                <Route path="/pronoms-test" element={<App><RemoteMarkdown src={pronoms_test_md} /><Test questions={[{"question": "The direct object pronoun \"le\" can replace a feminine singular noun.", "answers": ["True", "False"], "correct": 1}, {"question": "The indirect object pronoun \"leur\" is used to replace a plural noun.", "answers": ["True", "False"], "correct": 0}, {"question": "The direct object pronoun comes before the verb in a sentence. Je vais t'y voit.", "answers": ["True", "False"], "correct": 0}, {"question": "The indirect object pronoun \"te\" can replace the pronoun \"toi.\"", "answers": ["True", "False"], "correct": 0}, {"question": "The direct object pronoun \"la\" is used to replace a masculine singular noun.", "answers": ["True", "False"], "correct": 1}, {"question": "The indirect object pronoun is always placed after the verb.", "answers": ["True", "False"], "correct": 1}, {"question": "The direct object pronoun \"les\" can replace both masculine and feminine plural nouns.", "answers": ["True", "False"], "correct": 0}, {"question": "The indirect object pronoun \"me\" is used to replace the pronoun \"moi.\"", "answers": ["True", "False"], "correct": 1}, {"question": "The direct object pronouns \"la\" and \"les\" change to \"l'\" before a vowel sound.", "answers": ["True", "False"], "correct": 0}, {"question": "The indirect object pronoun \"lui\" can refer to both masculine and feminine nouns.", "answers": ["True", "False"], "correct": 0}]}></Test></App>}></Route>
                <Route path="/subjonctif" element={<App><RemoteMarkdown src={subjonctif_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-written-1" element={<App><RemoteMarkdown src={subjonctif_written_1_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-written-2" element={<App><RemoteMarkdown src={subjonctif_written_2_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-oral-1" element={<App><RemoteMarkdown src={subjonctif_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-oral-2" element={<App><RemoteMarkdown src={subjonctif_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/literary" element={<App><RemoteMarkdown src={literary_md} className="no-head"/></App>}></Route>
                <Route path="/literary-oral-1" element={<App><RemoteMarkdown src={literary_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/literary-oral-2" element={<App><RemoteMarkdown src={literary_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/literary-written-1" element={<App><RemoteMarkdown src={literary_written_1_md} className="no-head"/></App>}></Route>
                <Route path="/literary-written-key" element={<App><RemoteMarkdown src={literary_written_key_md} className="no-head"/></App>}></Route>
                {/* <Route path="/test-maker" element={<App><TestMaker></TestMaker></App>} /> */}
                <Route path="*" element={<App>404 Page not found</App>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
