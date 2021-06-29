import React from 'react';
import Greeter from './components/Greeter';





const App = () => {
    return (
        <>
            < Greeter phrase="Whats up" name="Chris"/>
            < Greeter phrase="Whats up" name="Cody"/>
            < Greeter phrase="Whats up" name="Brad" />
            <input type="text" onChange={(e) => (e.target.value)} />
            <p>You are logging in as: </p>
             <p></p>
        </>
    );
};

export default App;