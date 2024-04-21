import react from "react";

const About=()=>{
    return(
        <div className="flex flex-col justify-center items-center"   >
    <div className="p-16">
        <p className="text-4xl">We are not just an Organization <br /> We are <span className="text-lime-400">Legacy of Change.</span></p>
    </div>
    <div className="flex gap-32 p-10">
        <div className="h-40 w-96"><img className="rounded-full" src="https://images.unsplash.com/photo-1582586483282-e630a1695ef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1c3RhaW5hYmxlfGVufDB8fDB8fHww" alt="" /></div>
        <div className="h-40 w-96"><img className="rounded-md" src="https://images.unsplash.com/photo-1455778977533-4a3ef39091c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1c3RhaW5hYmxlfGVufDB8fDB8fHww" alt="" /></div>
        <div className="h-40 w-96"><img className="rounded-full" src="https://images.unsplash.com/photo-1556983852-43bf21186b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c3RhaW5hYmxlfGVufDB8fDB8fHww" alt="" /></div>
    </div>
    </div>
    )
}
export default About;