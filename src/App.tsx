import { useState } from 'react';
import './App.css';
import NotificationBar from './components/NotificationBar';
import eventBus from './EventBus';

function App() {

  const [message, setMessage] = useState<string>('Default message');

  const showNotification = () => {
    eventBus.dispatch("notify", { message: message });
  }

  return (
    <div className="App">
      <header>
        Type your notification message and submit 
      </header>
      <div className="content">
        <input type="text" id="input" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={()=> showNotification()}>Notify!</button>
      </div>
      <NotificationBar/>
    </div>
  );
}

export default App;
