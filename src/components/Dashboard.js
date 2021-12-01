const Dashboard = props => {
    return (
        <div className="dashboard">
            <div className="category">
                <h3>Ip Address</h3>
                <span>{props.data.ip || '-'}</span>
            </div>
            <div className="category">
                <h3>Location</h3>
                <span>{props.data.location ? 
                `${props.data.location.region}, ${props.data.location.country}`  
                : '-'}</span>
            </div>
            <div className="category">
                <h3>Timezone</h3>
                <span>{props.data.location ? props.data.location.timezone 
                : '-'}</span>
            </div>
            <div className="category">
                <h3>Isp</h3>
                <span>{props.data.isp || '-'}</span>
            </div>
        </div>
    )
}

export default Dashboard;