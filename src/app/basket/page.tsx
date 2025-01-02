import Navigation from "@/components/header/Navigation";
import OrderForm from "@/app/basket/components/OrderForm";
import BasketProducts from "@/app/basket/components/BasketProducts";


const Basket = async () => {


    return (
        <div>
            <div
                className='
                flex
                justify-center
                items-start
                mt-[100px]'>
                <div
                    className="
                    flex
                    flex-col
                    gap-5
                    p-10
                    pt-0
                    w-[480px]
                    md:w-full
                    md:flex-row
                    sm:max-w-[880px]">
                    <OrderForm/>
                    <BasketProducts/>
                </div>
            </div>
        </div>
    )
}

export default Basket