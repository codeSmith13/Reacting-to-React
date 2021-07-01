import React,{ useState, useEffect} from 'react';
import Greeter from './components/Greeter';


let App = () => {
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

     useEffect(() => {
    if (loaded === false) {
      setTimeout(() => setLoaded(!loaded), 3000);
    }
  }, [loaded]);

  let handleClick = () => setLoaded(!loaded);

  if (loaded) {

    return (
        <>
            < Greeter phrase="Whats up" name="Chris"/>
            < Greeter phrase="Whats up" name="Cody"/>
            < Greeter phrase="Whats up" name="Brad" />
            <input type="text" placeholder="Type your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <p>You are logging in as:{username} </p>
             <p></p>
        </>
    );
     } else {
    return (
      <>
        <h1>Loading...</h1>
        <button onClick={() => handleClick()}>Click to load page</button>
      </>
    );
 }

};

export default App;