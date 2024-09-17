
import {Button} from "@nextui-org/react";
import React from "react";
const Publicacion = () => {
    
    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
        <div className=" flex flex-col ">
            <header className="px-3  flex flex-col   bg-slate-50  justify-between w-full gap-5 border-2 border-x-gray-300 border-t-gray-300">
                <div className="flex justify-between  pt-3">
                    <div className="flex gap-3 ">
                        <div className=" flex justify-center items-center p-5 w-10 h-10 bg-emerald-400 rounded-full">


                        </div>
                        <div >
                            <h1 className="text-sm">Alejandro De la espriella</h1>
                            <h3 className="text-xs">Desarrolador De software</h3>
                        </div>
                    </div>

                     <Button
                className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                radius="full"
                size="sm"
                variant={isFollowed ? "bordered" : "light"}
                onPress={() => setIsFollowed(!isFollowed)}
            >
                {isFollowed ? "Siguiendo" : "Seguir"}
            </Button> 
                </div>
                

                <div className="flex text-xs h-5/6">
                   <p className="text-xs">Descripcion de ejemplo </p>
                </div>

            </header>
            <main className=" flex  flex-col justify-center items-center h-auto w-full px-2  bg-slate-50 border-2 border-x-gray-300 border-b-gray-300">
                <div className="flex h-56 w-5/6 justify-center items-center bg-lime-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-codepen">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
                        <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                        <path d="M3 9l0 6" />
                        <path d="M21 9l0 6" />
                        <path d="M12 3l0 6" />
                        <path d="M12 15l0 6" />
                    </svg>
                </div>
            </main>
            <footer className="flex justify-center items-center h-20 ">
                <div className="flex w-full justify-around border-2 items-center  bg-white h-10 gap-4 px-2 border-gray-300">
                    <button className="flex justify-center w-full hover:bg-gray-200 rounded-md ">

                        <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                        </svg>
                    </button>
                    <button className="flex justify-center w-full hover:bg-gray-200 rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                        </svg>
                    </button>
                    <button className=" flex justify-center w-full hover:bg-gray-200 rounded-md">


                        <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share-3">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
                        </svg>
                    </button>
                    <button className=" flex justify-center w-full hover:bg-gray-200 rounded-md">

                        <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-flag-3">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
                        </svg>

                    </button>
                </div>
            </footer>
        </div>
    )
}


export default Publicacion