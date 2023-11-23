import { useContext, useState } from 'react';
import Root from './routes/root'


import Sidebar from './components/Sidebar'
import Header from './components/Header'

import { AppContent, AppContainer } from './style'
import { ThemeContext, ThemeContextProps } from './context/theme-context';

function App() {
  const [selectedPath, setSelectedPath] = useState<string>('Dashboard');

  const { getThemeColors } = useContext(ThemeContext) as ThemeContextProps;

  const theme = getThemeColors()

  return (
    <AppContainer>
      <Sidebar setPath={setSelectedPath} />
      <AppContent appTheme={theme}>
        <Header title={selectedPath} />
        <Root />
      </AppContent>
    </AppContainer>
  )
}

export default App
