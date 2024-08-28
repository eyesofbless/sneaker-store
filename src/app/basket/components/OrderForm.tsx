"use client"

import {SubmitHandler, useForm} from "react-hook-form";

interface IFormInput {
    email: string
    fullName: string
    telephone: number
    city: string
}

const OrderForm = () => {

    const {register, handleSubmit} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <div className="flex bg-gray-100 p-7 rounded-lg md:w-full h-min">
            <div className="flex flex-col w-full">
                <p className="text-[1.375rem] mb-[2.125rem]">Оформите заказ</p>
                <form className="flex flex-col gap-5 "
                      onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <label className={'text-[0.625rem] mb-2'}>EMAIL</label>
                        <input
                            placeholder="awesomeyou@mail.com"
                            className="
                            p-3
                            rounded-lg"
                            type={'email'}
                            {...register("email",
                                {required: true})} />
                    </div>
                    <div className='flex flex-col'>
                        <label className={'text-[0.625rem] mb-2'}>ФИО</label>
                        <input
                            placeholder="Морозов Иван Викторович"
                            className="
                            p-3
                            rounded-lg"
                            type={'text'}
                            {...register("fullName",
                                {required: true})} />
                    </div>
                    <div className='flex flex-col'>
                        <label className={'text-[0.625rem] mb-2'}>ТЕЛЕФОН</label>
                        <input
                            placeholder="+7 952 999 99 99"
                            className="
                            p-3
                            rounded-lg"
                            type={'tel'}
                            {...register("telephone",
                                {required: true})} />
                    </div>
                    <div className='flex flex-col'>
                        <label className={'text-[0.625rem] mb-2'}>ГОРОД</label>
                        <input
                            placeholder="Город"
                            className="
                            p-3
                            rounded-lg"
                            type={'text'}
                            {...register("city",
                                {required: true})} />
                    </div>
                    <input
                        className="
                    p-2
                    hover:opacity-75
                    transition
                    text-white
                    bg-blue-600
                    rounded-lg
                    cursor-pointer"
                        value={'Оформить заказ'}
                        type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default OrderForm