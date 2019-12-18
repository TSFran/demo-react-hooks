import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Wrapper, Box } from './styled';
import { CounterContainer } from '@app/src/components/CounterClass';
import { DataContext } from '@app/context';
import { rClass } from '@app/context/data';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial;
    font-size: 20px;
  }
`;

export const App: React.FC = () => (
  <DataContext.Provider value={rClass}>
    <Wrapper>
      <Box>
        <CounterContainer />
      </Box> 
    </Wrapper>
  </DataContext.Provider>
);

App.displayName = 'App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

