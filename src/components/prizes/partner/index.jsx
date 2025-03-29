import React from "react"

// img
import img from "../../../assets/img/prizes/chance.avif"

const PartnerPrize = () => {
    return (
        <div className="bg-white p-[30px] flex justify-around items-center max-[745px]:p-[15px] gap-[20px] rounded-3xl max-[745px]:flex-col max-[745px]:items-center max-[745px]:justify-center max-[745px]:text-center">
            <div className="flex justify-center items-center">
                <img src={img} alt="" className="h-[200px] " />
            </div>

            <div className="flex flex-col gap-[10px]">
                <h1 className="text-[1.8rem] font-bold leading-[120%] max-[400px]:text-[1.2rem]">
                    Дополнительный <br className="max-[745px]:hidden" /> шанс в
                    розыгрыше <br className="max-[745px]:hidden" />{" "}
                    еженедельного <br /> и главного призов
                </h1>

                <small className="text-[#555252]">
                    Количество призов за весь период акции:{" "}
                    <span className="text-black">1</span>
                </small>
            </div>
        </div>
    )
}

export default PartnerPrize
