import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserCatalog from "./catalog/UserCatalog";
import GameCatalog from "./catalog/GameCatalog";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserCatalog(),
        game: new GameCatalog(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

