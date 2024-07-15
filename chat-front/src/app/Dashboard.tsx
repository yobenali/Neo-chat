
const Dashboard = () => {
    return  (
        <div>
            <h2 style={{color: '#1B1B1D', paddingLeft: '38%'}}>Chat</h2>
            <div>
            <input type="text" placeholder="Search" style={{ padding: "4%", borderRadius: '10px', marginLeft: '1%', width: '20dvw', marginTop: '-3%'}}/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={26} height={26} color={"#000000"} fill={"none"}>
                <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            </div>
            <div className="dropdown-dpt" style={{border: '1px solid rgb(234,234,234)', borderRadius: '7%', height: '40vh', marginTop: '5%'}}>
                <div style={{margin: '12px',width: '0', height: '0', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid black'}}>
                <h4 style={{color: '#1b1b1b', paddingLeft: '10px', marginTop: '-13px'}}>Departements</h4>
                </div>
                <div className="dropdown-content" style={{paddingTop: '8%', marginLeft: '3%'}}>
                    <a href="#"style={{color: '#1B1B1D'}}>#IT<br/></a>
                    <a href="#"style={{color: '#1B1B1D'}}>#HR<br/></a>
                    <a href="#"style={{color: '#1B1B1D'}}>#Finance<br/></a>
                </div>
            </div>
            <div className="dropdown-client" style={{border: '1px solid rgb(234,234,234)', borderRadius: '7%', height: '40vh'}}>
            <div style={{margin: '12px',width: '0', height: '0', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid black'}}>
                <h4 style={{color: '#1b1b1b', paddingLeft: '10px', marginTop: '-13px'}}>Messages</h4>
            </div>                
                <div className="dropdown-content" style={{marginLeft: '3%'}}>
                    {/*adding img*/}
                    <a href="#"style={{color: '#1B1B1D'}}>1st client<br/></a>
                    <a href="#"style={{color: '#1B1B1D'}}>2nd client<br/></a>
                    <a href="#"style={{color: '#1B1B1D'}}>3rd client<br/></a>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;