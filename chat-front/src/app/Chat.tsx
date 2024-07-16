const Chat = () => {
    return  (
        <div className="chat" >
            <h2 style={{color: '#1B1B1D', paddingLeft: '10vw'}}>Start a Conversation</h2>
            <div style={{height: '82vh', backgroundColor: 'white', borderRadius: '25px', padding: '0 4px 0 4px', opacity: '0.9', margin: '1%'}}></div>
            <input type="text" placeholder="messaging" style={{height: '4vh', borderRadius: '10px', paddingLeft: '5%', width: '38dvw', opacity: '0.5', margin: '1%'}} />
            <button style={{color: '#1B1B1D', height: '4vh', width: '8vw', borderRadius: '10px'}}>Send</button>
        </div>
    )
};

export default Chat;