import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {config} from "./wagmi-config.js";
import {WagmiProvider} from "wagmi";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </WagmiProvider>
    </React.StrictMode>,
)
