import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
=======
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
>>>>>>> c9b6ef7 (first commit)
  </StrictMode>,
)
