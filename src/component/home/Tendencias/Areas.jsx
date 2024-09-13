const Areas = ({Area,color,Descripcion}) => {
    return (
        <div className=" flex items-center gap-3 h-11 hover:bg-gray-100 cursor-pointer px-5">

            <div className={`flex justify-center items-center border-2 w-40 h-8 rounded-lg ${color ? `bg-${color}` : ''}`}>
         

               <h1>#{Area}</h1>
            </div>
            <div>
        <h4 className="text-xs">{Descripcion}</h4>
            </div>
        </div>
    )
}
export default Areas