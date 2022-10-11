import {useState} from 'react';



function BigBoyButton(props) {
    const clickFunction = (e) => {
        setCount(count + 1)
    };
    const [count, setCount] = useState(0)
    return (
        <>
        <h1>{count}</h1>
        <button onClick={clickFunction} className="btn btn-danger">Big boy</button>
        </>
    )
}

export default BigBoyButton