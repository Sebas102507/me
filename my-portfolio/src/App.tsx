import { Routes, Route } from 'react-router-dom'
import Home from './Home'

function Blog() {
  return (
    <main className="container">
      <h2 className="section-title">Blog</h2>
      <p>Coming soon.</p>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App