import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PastaFitLanding from './components/PastaFitLanding'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/massasfit" element={<PastaFitLanding />} />
        <Route path="/" element={<Navigate to="/massasfit" replace />} />
      </Routes>
    </Router>
  )
}

export default App
