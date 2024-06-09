const GreetingSection = ()=>{
    return <div className="flex w-full justify-between items-center p-4">
        <div className="flex flex-col space-y-1">
            <h1 className="text-lg">Halo,</h1>
            <h1 className="text-2xl font-bold">Mira Setiawan</h1>
        </div>
        <div className="flex space-x-2 items-center">
            <img src="./location.svg" alt="" />
            <h1 className="text-[#2653C7]">Depok</h1>
        </div>
    </div>
}

export default GreetingSection