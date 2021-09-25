import {useState  } from 'react';
import './App.css';

function App() {
  let [clicked, setClicked] = useState('')
  return (
    <>
    <div class={`enter ${clicked}`} onClick={() => setClicked('clicked')}>Oh hai Tianna.. click anywhere!</div>
    <div className={`App ${clicked}`}>
        <div class="miss">Miss Tianna...  💖</div>
        <br />
        <div>
          So, we're going on a second date eh?
        </div>
        <br />
        <div class="date">
          Friday, Oct.1 / 2021 (what time? Are you working again?)
        </div>
        <br />
        <div>
          I think we should try cooking together. Pasta? <em>Fresh</em> Pasta!
        </div>
        <div>Throw on some tunes.</div>
        <br />
        <div>This is a <b>no sex assumed event!</b></div>
        <br />
        <div>But I will totally do some partially dressed yoga in the morning, so if you decide to stay over you're welcome to join me.</div>
        <br />
        <div>Other fun ideas:</div>
        <ul>
          <li>watch a movie</li>
          <li>catch a comedy show</li>
          <li>cycle?</li>
          <li>sit under the stars, while cuddling under a blanket? maybe at sugar beach?</li>
        </ul>
    </div>
    </>
  );
}

export default App;
