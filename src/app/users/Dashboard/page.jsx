import Image from "next/image"
import { Authsession } from "@/libs/authCall"

const Dashboard = async() => {

    const user = await Authsession()
    return(
        <div className="w-56 text-white flex gap-2 justify-between my-10 mx-10">
            <Image 
                src={user?.image}
                alt="..."
                height={250}
                width={250}
                className="rounded-full"
            />
            <div className="flex flex-col m-auto ml-10">
                <h2 className="text-5xl font-bold">{user?.name}</h2>
                <h3 className="">{user?.email}</h3>
            </div>
        </div>
    )
}

export default Dashboard