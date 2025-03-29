import React from "react"

// img
import prizeCard from "../../../assets/img/prizes/main-prize.avif"

const MainPrize = () => {
    return (
        <div className="bg-white p-[30px] flex justify-around items-center max-[745px]:p-[15px] gap-[20px] rounded-3xl max-[745px]:flex-col max-[745px]:items-center max-[745px]:justify-center max-[745px]:text-center">
            <div className="flex justify-center items-center">
                <img
                    src={prizeCard}
                    alt=""
                    className="h-[200px] max-[400px]:w-full"
                />
            </div>

            <div className="flex flex-col gap-[10px]">
                <h1 className="text-[1.8rem] font-bold leading-[120%] max-[400px]:text-[1.2rem]">
                    500 000 рублей <br className="max-[745px]:hidden" /> на
                    зимние каникулы
                </h1>

                <p className="font-medium leading-[120%] max-[400px]:text-[13px]">
                    Совершайте покупки на сумму от 500 ₽ в чеке{" "}
                    <br className="max-[745px]:hidden" /> и участвуйте в
                    розыгрыше главного приза
                </p>

                <small className="text-[#555252]">
                    Количество призов за весь период акции:{" "}
                    <span className="text-black">1</span>
                </small>
            </div>
        </div>
    )
}

export default MainPrize
