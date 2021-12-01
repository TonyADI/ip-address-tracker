const Searchbar = props => {
    const handleChange = e => {
        props.handleChange(e.target.value)
    }
    const handleKeyPress = e => {
        if(e.which === 13){
            props.handleClick();
        }
    }
    return (
        <div className="searchbar">
            <div className="input-container">
                <input placeholder="Search for any IP address or domain"
                value={props.term} onChange={handleChange}
                onKeyPress={handleKeyPress}></input>
                <button onClick={props.handleClick}
                ><img src={props.iconArrow} alt='right arrow'/></button></div>
        </div>
    )
}

export default Searchbar;