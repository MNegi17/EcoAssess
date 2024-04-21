import react from "react"
import Buttons from "./Buttons";
import { Link} from "react-router-dom";
import logo from "./logo.png"

const Main = () =>{
    const reloadPage = ()=>{
        window.location.reload();
    }
    return(
        <div className="grid grid-cols-2 box-border ">
            <div className="absolute w-16 cursor-pointer "  onClick={reloadPage} style={{top:"20px",left:"140px"}}>
            <img className="logo" src={logo} alt="" />
            </div>
            <p className="absolute cursor-pointer" onClick={reloadPage} style={{top:"35px",left:"220px"}}>EcoAssess</p>
           <Link className="absolute" style={{top:"20px",right:"550px"}} to={'AboutUs'}> <Buttons  text={"AboutUs"} /></Link>
           <Link className="absolute" style={{top:"20px",right:"400px"}} to={'Services'}><Buttons  text={"Services"} /></Link>
            <Link className="absolute" style={{top:"20px",right:"250px"}} to={'Clients'}><Buttons text={"Clients"} /></Link>
        <div className= "box-border p-36">   
        
        <p className="font semi-bold ">Sculpting Future with Green Materials</p>
           <p className="text-bold text-8xl">Leading the Way in <span className="text-green-400">Sustainable</span> Materials</p>
        </div>
        <div>
            <div className="flex justify-center items-center p-4  pt-20 box-border">
            <img className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Leaf"
             style={{ width: "70%", height: "85%",   }}/>
             </div>
        </div>
        </div>
    )
}
export default Main;