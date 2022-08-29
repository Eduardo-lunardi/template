import './assets/sass/App.css'
import Routes from './routes'
import { ReactElement } from 'react'

function App(): ReactElement {
    return (
        <div className="App">
            <Routes />
        </div>
    )
}

export default App
