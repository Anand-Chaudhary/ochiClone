const Features = () => {
    return (
        <div className="w-full py-10">
            <div className="w-full px-10 border-b-2 border-zinc-700 pb-15">
                <h1 className="text-6xl tracking-tighter">Featured Project</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex mt-10 gap-10">
                    <div className="cardcontainer relative w-1/2  h-[80vh]">
                    <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl leading-none tracking-tighter text-[#CDEA68]">{"FYDE".split('').map((item, index)=><span key={index}>{item}</span>)}</h1>
                        <div className="card w-full rounded-xl h-full overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className="cardcontainer relative w-1/2  h-[80vh]">
                    <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl leading-none tracking-tighter text-[#CDEA68]">
                        {"VISE".split('').map((item, index)=><span key={index}>{item}</span>)}
                    </h1>

                        <div className="card w-full rounded-xl h-full overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features