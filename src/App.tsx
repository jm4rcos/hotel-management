import { useState } from 'react';
import Root from './routes/root'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

import { AppContent } from './style'

function App() {
  const [selectedPath, setSelectedPath] = useState<string>('Dashboard');

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Sidebar setPath={setSelectedPath} />
      <AppContent>
        <Header title={selectedPath} />
        <Root />
      </AppContent>
    </div>
  )
}

export default App
