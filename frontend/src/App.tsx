import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';

import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
