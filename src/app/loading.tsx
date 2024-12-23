import Navigation from "@/components/header/Navigation";
import Image from "next/image";

const Preloader = () => {


    return (
        <div className='flex justify-center items-center h-screen'>
            <Navigation/>
            <Image src={'/images/preloader.gif'}
                   alt={'loading'}
                   width={"100"}
                   height={"100"}/>
            
        </div>
    )
}

export default Preloader