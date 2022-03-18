import React from 'react'
import PokeProvider from './providers/poke-provider'
import { ResetCSS } from './global/resetCSS'
import App from './App'

function Providers() {
    return (
        <main>
            <PokeProvider>
                <ResetCSS />
                <App />
            </PokeProvider>
        </main>
    )
}

export default Providers