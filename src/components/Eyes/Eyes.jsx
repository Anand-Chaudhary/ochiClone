import { useEffect, useState } from "react"

const Eyes = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX  = e.clientX
            let mouseY = e.clientY

            let deltX = mouseX - (window.innerWidth)/2
            let deltY = mouseY - (window.innerHeight)/2
            
            let angle = Math.atan2(deltY, deltX) * (180/Math.PI)
            setRotate(angle-180)
        })
    })
  return (
    <div className="w-full h-screen overflow-hidden">
        <div className="w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                <div className="w-[15vw] flex justify-center items-center h-[15vw] bg-white rounded-full">
                    <div className="w-2/3 h-2/3 relative bg-black rounded-full">
                    <div style = {{transform : `rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10">
                        <div className="w-10 h-10 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] flex justify-center items-center h-[15vw] bg-white rounded-full">
                    <div className="w-2/3 h-2/3 relative bg-black rounded-full">
                    <div style = {{transform : `rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                        <div className="w-10 h-10 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes