import react from "react"
import { Link } from "react-router-dom";
const Service = ()=>{
    return(
        <div>
        <div className="flex flex-col p-10 justify-center items-center">
            <p className="text-6xl">Our <span className="text-lime-500">Services.</span></p>
        </div>
        <div className="flex gap-10 p-10">
         <div className="h-80 w-80"><img  className="mix-blend-multiply hover:mix-blend-overlay" src="https://plus.unsplash.com/premium_photo-1681987448291-1e5985657c0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
         <div className="h-80 w-80"><img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        </div>
        </div>
    )
 }

export default Service;