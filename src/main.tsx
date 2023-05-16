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
import passe_avoir_quiz_md from './assets/passe-avoir-quiz.md'
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
import imparfait_written_2_md from './assets/imparfait-written-2.md'
import imparfait_test_md from './assets/imparfait-test.md'
import imparfait_written_key_md from './assets/imparfait-written-key.md'
import conditionnel_md from './assets/conditionnel.md'
import conditionnel_oral_1_md from './assets/conditionnel-oral-1.md'
import conditionnel_oral_2_md from './assets/conditionnel-oral-2.md'
import conditionnel_written_1_md from './assets/conditionnel-written-1.md'
import conditionnel_written_2_md from './assets/conditionnel-written-2.md'
import conditionnel_quiz_md from './assets/conditionnel-quiz.md'
import conditionnel_quiz_key_md from './assets/conditionnel-quiz-key.md'
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
import subjonctif_test_md from './assets/subjonctif-test.md'
import literary_md from './assets/literary.md'
import literary_oral_1_md from './assets/literary-oral-1.md'
import literary_oral_2_md from './assets/literary-oral-2.md'
import literary_written_1_md from './assets/literary-written-1.md'
import literary_written_2_md from './assets/literary-written-2.md'
import literary_written_key_md from './assets/literary-written-key.md'
import literary_test_md from './assets/literary-test.md'
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
                            <img src="/french2-site/17.png" />
                            <img src="/french2-site/18.png" />
                            <img src="/french2-site/19.png" />
                            <img src="/french2-site/20.jpg" />
                        </div>
                    </App>
                }></Route>
                <Route path="/passe-avoir" element={<App><RemoteMarkdown src={passe_avoir_md} /></App>}></Route>
                <Route path="/passe-avoir-oral-1" element={<App><RemoteMarkdown src={passe_avoir_oral_1_md} /></App>}></Route>
                <Route path="/passe-avoir-oral-2" element={<App><RemoteMarkdown src={passe_avoir_oral_2_md} /></App>}></Route>
                <Route path="/passe-avoir-written-1" element={<App><RemoteMarkdown src={passe_avoir_written_1_md} /></App>}></Route>
                <Route path="/passe-avoir-written-2" element={<App><RemoteMarkdown src={passe_avoir_written_2_md} /></App>}></Route>
                <Route path="/passe-avoir-written-3" element={<App><RemoteMarkdown src={passe_avoir_written_3_md} /></App>}></Route>
                <Route path="/passe-avoir-quiz" element={<App><RemoteMarkdown src={passe_avoir_quiz_md} /></App>}></Route>
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
                <Route path="/futur-description" element={<App><RemoteMarkdown src={futur_md}/></App>}></Route>
                <Route path="/imparfait" element={<App><RemoteMarkdown src={imparfait_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-oral-1" element={<App><RemoteMarkdown src={imparfait_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-oral-2" element={<App><RemoteMarkdown src={imparfait_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-written-1" element={<App><RemoteMarkdown src={imparfait_written_1_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-written-2" element={<App><RemoteMarkdown src={imparfait_written_2_md} className="no-head"/></App>}></Route>
                <Route path="/imparfait-test" element={<App><RemoteMarkdown src={imparfait_test_md} /><Test questions={[{"question": "Je faire", "answers": ["Je frait", "Je frias", "Je faisais", "Je fains"], "correct": 2}, {"question": "Elles faire", "answers": ["Elles faire", "Elle faisent", "Elle iassion", "Elles faisaient"], "correct": 3}, {"question": "Tu \u00e9tudier", "answers": ["Tu \u00e9tudiais", "Tu \u00e9tudiens", "Vous \u00e9tudiez", "Tu \u00e9tudias"], "correct": 0}, {"question": "Vous aller", "answers": ["Vous allies", "Vous alliez", "Vous allions", "Vous aller"], "correct": 1}, {"question": "Nous \u00eatre", "answers": ["Nous \u00eatren", "Nous \u00eatrions", "Nous \u00eations", "Nous \u00eatre"], "correct": 2}, {"question": "Il perler", "answers": ["Il parlait", "Il parliet", "Il parliez", "Il parit"], "correct": 0}, {"question": "On finir", "answers": ["On finiez", "On finissont", "On finissat", "On finissait"], "correct": 3}]}></Test></App>}></Route>
                <Route path="/imparfait-written-key" element={<App><RemoteMarkdown src={imparfait_written_key_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel" element={<App><RemoteMarkdown src={conditionnel_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel-oral-1" element={<App><RemoteMarkdown src={conditionnel_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel-oral-2" element={<App><RemoteMarkdown src={conditionnel_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/conditionnel-written-1" element={<App><RemoteMarkdown src={conditionnel_written_1_md} /></App>}></Route>
                <Route path="/conditionnel-written-2" element={<App><RemoteMarkdown src={conditionnel_written_2_md} /></App>}></Route>
                <Route path="/conditionnel-quiz" element={<App><RemoteMarkdown src={conditionnel_quiz_md} /></App>}></Route>
                <Route path="/conditionnel-quiz-key" element={<App><RemoteMarkdown src={conditionnel_quiz_key_md} /></App>}></Route>
                <Route path="/conditionnel-written-key" element={<App><RemoteMarkdown src={conditionnel_written_key_md} /></App>}></Route>
                <Route path="/pronoms-description" element={<App><RemoteMarkdown src={pronoms_description_md} /></App>}></Route>
                <Route path="/pronoms-written-1" element={<App><RemoteMarkdown src={pronoms_written_1_md} /></App>}></Route>
                <Route path="/pronoms-written-2" element={<App><RemoteMarkdown src={pronoms_written_2_md} /></App>}></Route>
                <Route path="/pronoms-written-key" element={<App><RemoteMarkdown src={pronoms_written_key_md} /></App>}></Route>
                <Route path="/pronoms-oral-1" element={<App><RemoteMarkdown src={pronoms_oral_1_md} /></App>}></Route>
                <Route path="/pronoms-test" element={<App><RemoteMarkdown src={pronoms_test_md} /><Test questions={[{"question": "The direct object pronoun \"le\" can replace a feminine singular noun.", "answers": ["True", "False"], "correct": 1}, {"question": "The indirect object pronoun \"leur\" is used to replace a plural noun.", "answers": ["True", "False"], "correct": 0}, {"question": "The direct object pronoun comes before the verb in a sentence.", "answers": ["True", "False"], "correct": 0}, {"question": "The indirect object pronoun \"te\" can replace the pronoun \"toi.\"", "answers": ["True", "False"], "correct": 0}, {"question": "The direct object pronoun \"la\" is used to replace a masculine singular noun.", "answers": ["True", "False"], "correct": 1}, {"question": "The indirect object pronoun is always placed after the verb.", "answers": ["True", "False"], "correct": 1}, {"question": "The direct object pronoun \"les\" can replace both masculine and feminine plural nouns.", "answers": ["True", "False"], "correct": 0}, {"question": "The indirect object pronoun \"me\" is used to replace the pronoun \"moi.\"", "answers": ["True", "False"], "correct": 0}, {"question": "The direct object pronouns \"la\" and \"les\" change to \"l'\" before a vowel sound.", "answers": ["True", "False"], "correct": 0}, {"question": "The indirect object pronoun \"lui\" can refer to both masculine and feminine nouns.", "answers": ["True", "False"], "correct": 0}]}></Test></App>}></Route>
                <Route path="/subjonctif" element={<App><RemoteMarkdown src={subjonctif_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-written-1" element={<App><RemoteMarkdown src={subjonctif_written_1_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-written-2" element={<App><RemoteMarkdown src={subjonctif_written_2_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-oral-1" element={<App><RemoteMarkdown src={subjonctif_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-oral-2" element={<App><RemoteMarkdown src={subjonctif_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/subjonctif-test" element={<App><RemoteMarkdown src={subjonctif_test_md} /><Test questions={[{"question": "What is the proper conjugation for the je form of avoir in the subjonctif?", "answers": ["ais", "ait", "aie", "avoir"], "correct": 2}, {"question": "What is the proper conjugation for the tu form of \u00eatre in the subjonctif?", "answers": ["ait", "sois", "\u00eatre", "etois"], "correct": 1}, {"question": "What is the proper conjugation for the il/elle/on form of aller in the subjonctif?", "answers": ["aille", "allais", "aller", "ait"], "correct": 0}, {"question": "What is the proper conjugation for the vous form of faire in the subjonctif?", "answers": ["faire", "fasse", "fairez", "fassiez"], "correct": 3}, {"question": "What is the proper conjugation for the nous form of savoir in the subjonctif?", "answers": ["savions", "savoir", "savons", "sachions"], "correct": 3}, {"question": "What is the proper conjugation for the ils/elles form of pouvoir in the subjonctif?", "answers": ["pouvoir", "pouvent", "puissent", "pouvisent"], "correct": 2}, {"question": "Is the subjonctif a tense?", "answers": ["Yes", "No"], "correct": 1}, {"question": "Does a statement in the subjonctif need to be prefaced with an expression such as \u201cil faut que\u201d?", "answers": ["Yes", "No"], "correct": 0}, {"question": "What is the subjonctif used to express?", "answers": ["Uncertainty", "Needing to do something", "All of the above", "Neither"], "correct": 2}, {"question": "What form of a present tense verb has its ending changed to form the verb in the subjonctif?", "answers": ["Ils/elles", "Vous", "The infinitive", "Il/elle"], "correct": 0}]}></Test></App>}></Route>
                <Route path="/literary" element={<App><RemoteMarkdown src={literary_md} className="no-head"/></App>}></Route>
                <Route path="/literary-oral-1" element={<App><RemoteMarkdown src={literary_oral_1_md} className="no-head"/></App>}></Route>
                <Route path="/literary-oral-2" element={<App><RemoteMarkdown src={literary_oral_2_md} className="no-head"/></App>}></Route>
                <Route path="/literary-written-1" element={<App><RemoteMarkdown src={literary_written_1_md} className="no-head"/></App>}></Route>
                <Route path="/literary-written-2" element={<App><RemoteMarkdown src={literary_written_2_md} className="no-head"/></App>}></Route>
                <Route path="/literary-written-key" element={<App><RemoteMarkdown src={literary_written_key_md} className="no-head"/></App>}></Route>
                <Route path="/literary-test" element={<App><RemoteMarkdown src={literary_test_md} /><Test questions={[{"question": "Le cadre de l'histoire", "answers": ["Le personnage ou la force contre le personnage principal.", "L'histoire atteint son point culminant", "L'endroit o\u00f9 se d\u00e9roule la narrative.", "Une figure de style fond\u00e9e sur l'analogie."], "correct": 2}, {"question": "M\u00e9taphore", "answers": ["Une figure de style fond\u00e9e sur l'analogie.", "Les sentiments et les attitudes que l'auteur a impliqu\u00e9 dans l'\u0153uvre.", "Rupture de la continuit\u00e9 chronologique une p\u00e9riode ant\u00e9rieure.", "Un indice \u00e0 ce qui viendra plus tard dans l\u2019histoire."], "correct": 0}, {"question": "Le ton", "answers": ["Le personnage ou la force contre le personnage principal.", "Les sentiments et les attitudes que l'auteur a impliqu\u00e9 dans l'\u0153uvre.", "Un indice \u00e0 ce qui viendra plus tard dans l\u2019histoire.", "La r\u00e9solution du probl\u00e9matique."], "correct": 1}, {"question": "Protagoniste", "answers": ["L'endroit o\u00f9 se d\u00e9roule la narrative.", "Le message principal de l'\u0153uvre", "L'\u00e9motion dominant qui s'empresse sur le lecteur.", "Le personnage principal de l\u2019histoire."], "correct": 3}, {"question": "L'apog\u00e9e", "answers": ["Une figure de style fond\u00e9e sur l'analogie.", "L'histoire atteint son point culminant", "Comparaison de deux choses.", "Rupture de la continuit\u00e9 chronologique une p\u00e9riode ant\u00e9rieure."], "correct": 1}, {"question": "Les actions d'un personnage motiv\u00e9 \u00e0 r\u00e9soudre un conflit.", "answers": ["Le intrigue de l'histoire", "Antogoniste", "M\u00e9taphore", "Le cadre de l'histoire"], "correct": 0}, {"question": "Le personnage ou la force contre le personnage principal.", "answers": ["Un retour en arri\u00e8re", "Antagoniste", "L'apog\u00e9e", "Le pr\u00e9sage"], "correct": 1}, {"question": "L'\u00e9motion dominant qui s'empresse sur le lecteur.", "answers": ["Personnage", "Le ton", "L'humeur", "Comparaison"], "correct": 2}, {"question": "Le message principal de l'\u0153uvre", "answers": ["Le theme", "Le ton", "Protagoniste", "Le pr\u00e9sage"], "correct": 0}, {"question": "La r\u00e9solution du probl\u00e9matique.", "answers": ["M\u00e9taphore", "Personnification", "Le cadre de l'histoire", "Le d\u00e9noument"], "correct": 3}]}></Test></App>}></Route>
                {/* <Route path="/test-maker" element={<App><TestMaker></TestMaker></App>} /> */}
                <Route path="*" element={<App>404 Page not found</App>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
