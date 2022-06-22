import './App.css';
import { useState } from 'react'
import Component2 from './Second';
import Car from './Third';

const App = () => {

    const [count, setCount] = useState(0)

    // logic (js)

    const myStyle = { color: "red", backgroundColor: `rgb(160, 46, 135)` }
    // view (HTML)
    return (
        <div>
            <div>
                <h1 className="App">
                    <header className="App-header">
                        <button style={myStyle} onClick={() => setCount(count + 1)}>{count}</button>
                    </header>
                </h1>
            </div>
            {/* starting of second div */}
            <div>
                <h2 className="bigblue">
                    <header>
                        <Component2></Component2>
                    </header>
                </h2>
            </div>
            {/* starting 3rd div */}
            <div>
                <h3>
                    <Car></Car>
                </h3>

            </div>
            {/* <div>
                <h4 className='bigblue'>
                    <Calculate></Calculate>
                </h4>

            </div> */}
        </div>
    );
}

export default App;
