import { Button, ButtonGroup } from "@nextui-org/button";
import React from "react";
const Users = ({ Nombre, img}) => {
    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
        <div className="flex gap-2 w-full  items-center">

            <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-teal-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
            </div>
            <div className="w-28 mr-8">

            <h3 className="text-sm">{Nombre}</h3>
            </div>

            <Button
                className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                color="primary"
                radius="full"
                size="sm"
                variant={isFollowed ? "bordered" : "solid"}
                onPress={() => setIsFollowed(!isFollowed)}
            >
                {isFollowed ? "Siguiendo" : "Seguir"}
            </Button>

        </div>
    )
}
export default Users