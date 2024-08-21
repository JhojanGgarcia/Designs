import Image from "next/image"

export default function Header(){
    return(
        <header className="absolute top-0 backdrop-blur-lg w-full h-16 flex items-center justify-center">
            <div className="max-w-7xl flex items-center p-2 gap-2 w-full h-full relative">
                <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
                <h1 className=" font-bold  text-white md:flex hidden">Figma Designs</h1>
                <div className="items-center flex-row justify-center text-black dark:text-white font-sans font-medium text-xs mx-2 px-2 py-1 rounded-full bg-white/20 hidden sm:flex">v0.0.1</div>
                <div className="absolute right-0 p-4 gap-2 flex">
                </div>
            </div>
        </header>
    )
}