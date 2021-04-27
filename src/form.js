import {useEffect, useState} from "react";

const Form = () => {

    const data = {
        username: '',
        age: null,
    }

    const [state, setState] = useState(data)


    const myChangeHandler = (event) => {
        console.log(event.target.value)
        let nam = event.target.name
        let val = event.target.value
        setState({[nam]: val});
    }
    return (
        <form>
            <h1>Hello {state.username} </h1>
            <h2>{state.age}</h2>
            <p>Enter your name:</p>
            <input
                type='text'
                name='username'
                onChange={myChangeHandler}
            />
            <p>Enter your age:</p>
            <input
                type='text'
                name='age'
                onChange={myChangeHandler}
            />
        </form>
    )
}

export default Form