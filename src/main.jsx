
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from "./Redux/store"
import { Provider } from 'react-redux'
import "./Translation/i18n.js"
createRoot(document.getElementById('root')).render(

<Provider store={store}>
    <App />
</Provider>

)
