import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import '@/styles/common.scss'
import './index.css'
import router from './router/index.jsx'

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
