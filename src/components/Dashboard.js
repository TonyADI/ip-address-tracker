const Dashboard = props => {
    return (
        <div className="dashboard">
            <div className="category">
                <h3>Ip Address</h3>
                <span>{props.data.ip || '-'}</span>
            </div>
            <div className="category">
                <h3>Location</h3>
                <span></span>
            </div>
            <div className="category">
                <h3>Timezone</h3>
                <span></span>
            </div>
            <div className="category">
                <h3>Isp</h3>
                <span>{props.data.isp || '-'}</span>
            </div>
        </div>
    )
}

export default Dashboard;