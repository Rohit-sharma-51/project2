// function Purchaseanalytics() {
//     return ( 
//         <div className="container" style={{backgroundColor:"white"}}>
//             <div className="row">               
//                 <div className="col h-200 p-3">
//                     <h4>Purchase Analytics</h4>
//                     </div>
//             </div>
//             <div className="row">
//                 <div className="col mt-4 card rounded-4 shadow-sm border-0 m-3" style={{ backgroundColor: "#f5f5f5", height: "400px" }}>
//                  {/* GRAPH */}
                   
//                 </div>


//                <div className="col mt-4 card shadow-sm border-0 rounded-4 m-3" style={{ backgroundColor: "#f5f5f5", height: "400px" }}>
//                 <div className="card-body">
//                 <h4 className="fw-bold">Category Spending</h4>
//                </div>
//         </div>
//             </div>
//         </div>
//      );
// }

// export default Purchaseanalytics;


import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

function Purchaseanalytics() {

  // ✅ Sample data
  const data = [
    { month: "Jan", Rice: 400, Wheat: 300, Vegetables: 500, Fruits: 200, Spices: 150 },
    { month: "Feb", Rice: 500, Wheat: 350, Vegetables: 600, Fruits: 300, Spices: 200 },
    { month: "Mar", Rice: 450, Wheat: 400, Vegetables: 550, Fruits: 350, Spices: 250 },
    { month: "Apr", Rice: 600, Wheat: 450, Vegetables: 700, Fruits: 400, Spices: 300 },
    { month: "May", Rice: 550, Wheat: 500, Vegetables: 650, Fruits: 450, Spices: 350 },
  ];

  return ( 
    <div className="container" style={{backgroundColor:"white"}}>
      
      <div className="row">               
        <div className="col h-200 p-3">
          <h4>Purchase Analytics</h4>
        </div>
      </div>

      <div className="row">

        {/* ✅ GRAPH CARD */}
        <div className="col mt-4 card rounded-4 shadow-sm border-0 m-3" style={{ backgroundColor: "white", height: "400px" }}>
          
          <div className="card-body">
            <h5 className="fw-bold mb-3">📊 Spending Trend</h5>

            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={data}>
                
                <CartesianGrid strokeDasharray="3 3" />
                
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="Rice" stroke="#ff0000" />
                <Line type="monotone" dataKey="Wheat" stroke="#ffa500" />
                <Line type="monotone" dataKey="Vegetables" stroke="#008000" />
                <Line type="monotone" dataKey="Fruits" stroke="#0000ff" />
                <Line type="monotone" dataKey="Spices" stroke="#800080" />

              </LineChart>
            </ResponsiveContainer>

          </div>
        </div>

        {/* SECOND CARD */}
        <div className="col mt-4 card shadow-sm border-0 rounded-4 m-3" style={{ backgroundColor: "#f5f5f5", height: "400px" }}>
          <div className="card-body">
            <h4 className="fw-bold">Category Spending</h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Purchaseanalytics;