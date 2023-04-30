import './App.css'
import Content from './Content'
import fileUrl from './assets/bg.png'

export default function App()
{
    return (
        <>
            <img className="side left" src={fileUrl}></img>
            <img className="side right" src={fileUrl}></img>
            <div className="center">
                <Content></Content>
            </div>
        </>
    )
}
