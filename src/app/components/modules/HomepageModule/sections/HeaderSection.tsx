const HeaderSection = ()=>{
    return <div className="flex w-full items-center p-4 justify-between">
        <h1 className="text-3xl font-bold text-[#2653C7]">WargaJaga</h1>
        <div className="flex space-x-4 items-center">
            <a href="/notification">
                <img src="./lonceng.svg"></img>
            </a>
            <a href="/setting">
                <img src="./setting.svg"></img>
            </a>
            <a href="/help">
                <img src="./ask.svg"></img>
            </a>
        </div>
    </div>
}

export default HeaderSection