import { createContext,} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export let UserContext = createContext(null)

let username = "Dipanshu"

createRoot(document.getElementById('root')).render(
  <UserContext value={username}>
    <App />
    <UserContext />
  </UserContext>
  // </UserContext.Provider> version 18 or lower
)
