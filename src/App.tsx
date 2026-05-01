import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Play from './pages/Play'
import Spaces from './pages/Spaces'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Founder from './pages/Founder'
import Booking from './pages/Booking'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
