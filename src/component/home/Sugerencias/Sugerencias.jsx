import Users from './Users'
const Sugerencias = () => {
    return (
        <div className="flex flex-col border-2  gap-4 items-center sticky  rounded-md w-full h-2/4  bg-white border-gray-300">
            <h1 className='text-xl'>Sugerenias</h1>
            <div className="flex flex-col h-full w-full px-5 gap-4">
                <Users Nombre={'Alejandro Beltran'}></Users>
                <Users Nombre={'Nicolas Arrieta'}></Users>
                <Users Nombre={'Julian Beltran'}></Users>
            </div>
        </div>
    )

}


export default Sugerencias 