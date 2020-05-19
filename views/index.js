import React from 'react';
import ReactDOM from 'react-dom';

export default class Root extends React.Component{
    render(){
        return (
            <div>
              <p>Hello World</p>
            </div>
        );
    }
}

ReactDOM.render(<Root />,document.getElementById('root'));