const Chat = () => {
    return  (
        <div className="chat" >
            <h2 style={{color: '#1B1B1D', paddingLeft: '10vw'}}>Start a Conversation</h2>
            <div style={{height: '85vh', backgroundColor: 'lightgray', borderRadius: '25px', padding: '0 4px 0 4px', opacity: '0.5'}}></div>
            <input type="text" placeholder="messaging" style={{height: '4vh', borderRadius: '10px', paddingLeft: '5%', width: '40vw'}} />
            <button style={{color: '#1B1B1D', height: '4vh', width: '8vw', borderRadius: '10px'}}>Send</button>
        </div>
    )
};

export default Chat;