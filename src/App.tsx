import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div >
        <button style={{background: '#1D164D', color: '#fff', padding: '20px'}}>teste</button>
      </div>
      <GlobalStyles/>
    </ThemeProvider>

  );
}

export default App;
