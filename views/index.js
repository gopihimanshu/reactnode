import React from 'react';
import ReactDOM from 'react-dom';

export default class Root extends React.Component{
    render(){
        return (
            <div>
              <p>Hello World !!</p>
              <footer>{CREATED_BY}</footer>
            </div>
        );
    }
}

ReactDOM.render(<Root />,document.getElementById('root'));