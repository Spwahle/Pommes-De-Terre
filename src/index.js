import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';


// import './style/main.scss';

class AppContainer extends React.Component {

  render() {
    return (
      <App />

    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'));
import {Provider} from 'react-redux';
