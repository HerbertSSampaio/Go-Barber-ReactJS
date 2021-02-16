/* eslint-disable no-use-before-define */
import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Herbert' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
