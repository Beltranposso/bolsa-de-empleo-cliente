import Share from "./SectionShare/Share"
import ListEmpleos from "./SectionListEmpleos/ListEmpleos"
import InfoEmpleo from "./InfoEmpleo/InfoEmpleo"
const Empleos = ()=>{
    return (
        <div className=" w-full h-full pt-5 grid grid-cols-la  gap-2 max-w-[95%] max-h-[98%]">
            <Share></Share>
            <ListEmpleos></ListEmpleos>
            <InfoEmpleo></InfoEmpleo>
        </div>
    )
}

export default Empleos