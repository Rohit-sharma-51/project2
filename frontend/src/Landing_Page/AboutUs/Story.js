function Story() {
     return ( 
        <div className="container colors">
            <div className="row mt-5">
                <h1 className="text-center" style={{color:"#219653"}}>Our Story</h1>
                <div className="col-6 mt-5">
                    <h4>Launched in 2026</h4>
                   <p style={{ fontSize: "1.2rem" }} className="text-muted"> KrishiConnect started as a solution to address the long-standing<br/> challenges faced by farmers in securing fair contracts and ensuring payments. By leveraging technology like blockchain and AI,<br/> we provide an end-to-end ecosystem that supports transparent contract farming,enabling both smallholder farmers and large-scale buyers.</p>
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                    <img src="/media/founded.jpeg" alt="Founded" style={{width:"90%"}} className="mt-3"></img>
                </div>
            </div>
        </div>
     );
}

export default Story;