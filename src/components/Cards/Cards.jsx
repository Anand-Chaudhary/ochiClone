const Cards = () => {
    return (
        <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-900">
            <div className="cardcontainer h-[50vh] w-1/2">
                <div className="card relative rounded-xl flex items-center justify-center w-full h-full bg-[#004D43]">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 px-5 py-1 border-2 rounded-full border-[#CDEA68] text-[#CDEA68] bottom-10">&copy;2019-2022</button>
                </div>
            </div>
            <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
                <div className="card flex items-center justify-center relative w-1/2 h-full rounded-xl bg-[#192826]">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 px-5 py-1 border-2 rounded-full capitalise bottom-10">RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 px-5 py-1 border-2 rounded-full bottom-10">BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>

        </div>
    )
}

export default Cards