
import {useState} from 'react'

function Component2() {
    const [greeting, setUgreeting] = useState("Goodbye");
  
    return (
        <h1>{`${greeting} and dont come back!`}</h1>
    );
}

export default Component2