const CrearPublicacion = () =>{

return(
    <div className="flex   flex-col justify-center border-2 rounded bg-white w-full h-28">
        <div className=" pl-5    flex justify-star items-center h-1/2 gap-3  ">
        <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-teal-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
            </div>
       
            <input className=" rounded-full w-2/3 h-10 text-sm bg-slate-200 pl-2" type="text"  />
        </div>
        <div className="pl-3  flex  items-center h-1/2 w-full gap-20">
       <button className="flex items-center justify-center h-10  w-32 hover:bg-gray-200 rounded-full">

        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-photo">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M15 8h.01" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
</svg>
<p>Fotos/Video</p>
       </button>
       <button className="flex items-center justify-center h-10  w-32 hover:bg-gray-200 rounded-full">

       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mood-happy">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 9l.01 0" />
  <path d="M15 9l.01 0" />
  <path d="M8 13a4 4 0 1 0 8 0h-8" />
</svg>
<p>Emogis</p>
</button>
        </div>
    </div>
)

}

export default CrearPublicacion