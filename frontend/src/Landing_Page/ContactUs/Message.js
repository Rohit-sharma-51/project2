function Message() {
    return ( 
        <div className="container colors">
            <div className="row">
                <div className="col-md-12 p-5 m-5 rounded hover-card2 text-center">
                    
                    <h2 style={{color:"#219653"}}>Send Us a Message</h2>

                    <div className="mb-4 text-start">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter name"
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="mb-4 text-start">
                        <label>Message</label>
                        <textarea 
                            className="form-control"
                            rows="4"
                            placeholder="Enter message"
                        ></textarea>
                    </div>

                    <button className="btn btn-success px-4">
                        Send Message
                    </button>

                </div>
            </div>
        </div>
     );
}

export default Message;