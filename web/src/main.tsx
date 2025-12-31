import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import IphoneScreen from '@/features/iphone/components/iphone-screen'
import CalculatorPage from '@/pages/calculator'
import './index.css'

console.log(import.meta.env.VITE_API_URL);
const client = new ApolloClient({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/*" element={<IphoneScreen />} />
          </Routes>  
        </BrowserRouter>
      </ApolloProvider>
  </StrictMode>
)
