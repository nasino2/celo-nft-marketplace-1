import React from 'react';
import ReactDOM from 'react-dom';
import {
  ContractKitProvider,
  Alfajores,
  NetworkNames,
} from '@celo-tools/use-contractkit';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <ContractKitProvider
      networks={[Alfajores]}
      network={{
        name: Celos,
        rpcUrl: 'https://forno.celo.org',
        graphQl: 'https://explorer.celo.orggraphiql',
        explorer: 'https://explorer.celo.org',
        chainId: 42220,
      }}
      dapp={{
        name: 'Celo Marketplace',
        description: 'A market place dapp built on the Celo blockchain',
        url: 'https://dacade.org',
      }}
    >
      <App />
    </ContractKitProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
