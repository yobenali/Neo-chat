const Details = () => {
    return  (
    <div className="details">
        <div>
            <h2 style={{color: '#1B1B1D', height: '5vh'}}>Client Profile</h2>
            <text style={{color: '#1B1B1D'}}>UserName<br/></text>
            {/*adding it status */}
        <div style={{height: '10vh', border: '2px solid rgb(234,234,234)', borderRadius: '7%', marginTop: '5%'}}>
            <h4 style={{color: '#1B1B1D'}}>Contact Informations</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width={18} height={16} color={"#000000"} fill={"none"}>
                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <text style={{color: '#1b1b1b '}}> Mail example</text>
            </div>
        </div>
        <div style={{height: '40vh', border: '1px solid rgb(234,234,234)'}}>  
            <text style={{color: '#1B1B1D'}}>About Me<br/></text>
            <text style={{color: '#1B1B1D'}}>Profile<br/></text>
            <text style={{color: '#1B1B1D'}}>Home page<br/></text>
            <text style={{color: '#1B1B1D'}}>Log Out<br/></text>
        </div>
    </div>
    )
};

export default Details;
