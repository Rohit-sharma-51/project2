function Notifications() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col" style={{height:"400px",backgroundColor:"white"}}>
                    <h4 className="mt-3"><i class="fa-solid fa-bell"></i> &nbsp;Notifications</h4><hr/>
                    <div className="text-center mt-4">
                    <i class="fa-solid fa-bell fa-3x text-muted"></i>
                    </div>
                    <p className="text-center text-muted">No notifications yet</p>
                </div>
            </div>
        </div>
     );
}

export default Notifications;