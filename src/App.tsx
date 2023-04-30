import { PropsWithChildren } from 'react'
import './App.css'
import Content from './Content'
import fileUrl from './assets/bg.png'

export default function App(props: PropsWithChildren<object>)
{
    return (
        <>
            <img className="side left" src={fileUrl}></img>
            <img className="side right" src={fileUrl}></img>
            <div className="center">
                <Content>{props.children}</Content>
            </div>
        </>
    )
}
