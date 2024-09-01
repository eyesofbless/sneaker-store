"use client";

import {SubmitHandler, useForm} from "react-hook-form";
import {useBasketStore} from "@/stores/basket-store";

interface IFormInput {
    email: string;
    fullName: string;
    telephone: string;  // Изменил тип на string
    city: string;
    basketProducts: any;
}

const OrderForm = () => {
    const {register, handleSubmit, setValue, formState: { errors }} = useForm<IFormInput>({
        mode: 'onChange'
    });
    const {basketProducts}: any = useBasketStore();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        data.basketProducts = basketProducts;
        console.log(data);
    };

    // Обработчик изменений для телефонного номера
    const handleTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const input = event.target.value;


        if (!input.startsWith("+7")) {
            setValue("telephone", "+7" + input.replace(/[^0-9]/g, "")); // Добавляет +7 и удаляет нечисловые символы
        } else {
            setValue("telephone", input.replace(/[^0-9+]/g, "")); // Удаляет нечисловые символы кроме +
        }
    };

    return (
        <div className="flex bg-gray-100 p-7 rounded-lg md:w-full h-min">
            <div className="flex flex-col w-full">
                <p className="text-[1.375rem] mb-[2.125rem]">Оформите заказ</p>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label className="text-[0.625rem] mb-2">EMAIL</label>
                        <input
                            placeholder="awesomeyou@mail.com"
                            className="p-3 rounded-lg"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="text-red-700">Email обязателен</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[0.625rem] mb-2">ФИО</label>
                        <input
                            placeholder="Морозов Иван Викторович"
                            className="p-3 rounded-lg"
                            type="text"
                            {...register("fullName", { required: true, pattern: /^[А-Яа-яЁё\s-]+$/u })}
                        />
                        {errors.fullName?.type === 'required' && (
                            <p className="text-red-700">ФИО обязательно</p>
                        )}
                        {errors.fullName?.type === 'pattern' && (
                            <p className="text-red-700">Пожалуйста, используйте кириллицу</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[0.625rem] mb-2">ТЕЛЕФОН</label>
                        <input
                            placeholder="+7 952 999 99 99"
                            className="p-3 rounded-lg"
                            type="tel"
                            {...register("telephone", { required: true, maxLength: 12 })}
                            onChange={handleTelephoneChange}
                        />
                        {errors.telephone && <p className="text-red-700">Телефон обязателен</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[0.625rem] mb-2">ГОРОД</label>
                        <input
                            placeholder="Город"
                            className="p-3 rounded-lg"
                            {...register("city", { required: true, pattern: /^[А-Яа-яЁё\s-]+$/u })}
                        />
                        {errors.city?.type === 'required' && (
                            <p className="text-red-700">Город обязателен</p>
                        )}
                        {errors.city?.type === 'pattern' && (
                            <p className="text-red-700">Пожалуйста, используйте кириллицу</p>
                            )}
                    </div>
                    <input
                        className="p-2 hover:opacity-75 transition text-white bg-blue-600 rounded-lg cursor-pointer"
                        value="Оформить заказ"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default OrderForm;