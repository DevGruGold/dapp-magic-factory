import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { publicProvider } from 'wagmi/providers/public';
import Index from "./pages/Index";
import { Footer } from "./components/Footer";

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'default-project-id';

const chains = [mainnet, polygon];

const { publicClient } = configureChains(
  chains, 
  [
    w3mProvider({ projectId }),
    publicProvider()
  ]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Routes>
                <Route path="/" element={<Index />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </QueryClientProvider>
    </WagmiConfig>
  );
};

export default App;