import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Toaster } from "@/components/ui/toaster";
import { ChatBot } from './components/ChatBot';

function App() {

  return (
    <>
      <Toaster />
      <ChatBot />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
