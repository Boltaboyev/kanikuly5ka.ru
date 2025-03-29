import React from "react"

// img
import people from "../../../src/assets/img/friends-link.avif"
import mediaPeople from "../../../src/assets/img/media-friends-link.avif"
import star from "../../../src/assets/img/star.avif"
import multiStar from "../../../src/assets/img/multi-star.avif"
import price from "../../../src/assets/img/400.avif"

const FriendShare = () => {
    return (
        <section className="py-[30px]">
            <div className="flex justify-between gap-[15px] bg-[#27932D] h-[420px] rounded-3xl overflow-hidden max-[1025px]:h-[390px] max-[935px]:h-[350px] max-[850px]:h-[320px] max-[780px]:hidden">
                <div className="p-[40px] flex flex-col justify-between items-start gap-[10px]">
                    <h1 className="title !text-start !text-white leading-[110%] max-[935px]:!text-[20px]">
                        Получите приз <br />
                        за друзей
                    </h1>

                    <div className="flex flex-col gap-[20px] max-[935px]:**:min-h-[25px] max-[935px]:**:min-w-[25px] max-[935px]:**:text-[13px]">
                        <div className="flex justify-start items-center gap-[10px]">
                            <span className="min-h-[35px] min-w-[35px] bg-white rounded-full text-black font-bold flex justify-center items-center">
                                1
                            </span>

                            <p className="leading-[120%] text-white text-[14px] font-medium max-[935px]:font-normal">
                                Отправьте другу ссылку на участие в Акции
                            </p>
                        </div>

                        <div className="flex justify-start items-start gap-[10px]">
                            <span className="min-h-[35px] min-w-[35px] bg-white rounded-full text-black font-bold flex justify-center items-center">
                                2
                            </span>

                            <p className="leading-[120%] text-white text-[14px] font-medium max-[935px]:font-normal">
                                По итогам розыгрыша одна пара друзей получит
                                Сертификат на покупку в «Пятёрочке» на 4 000
                                рублей
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px] items-start">
                        <button className="btn bg-[#E92724] text-white">
                            Пригласить друга
                        </button>

                        <p className="text-[11px] font-medium text-white">
                            * Приглашение можно отправить после регистрации
                            первого чека.
                        </p>
                    </div>
                </div>

                <div className="flex-2/3 pr-7 flex items-end relative">
                    <div className="flex justify-between items-center w-full absolute top-15">
                        <img src={star} alt="" className="h-[35px] starAnim" />
                        <img src={star} alt="" className="h-[25px]" />
                        <img
                            src={multiStar}
                            alt=""
                            className="h-[50px] starAnim"
                        />
                    </div>

                    <div className="flex justify-between items-center w-full absolute top-3/5 z-14">
                        <img
                            src={price}
                            alt=""
                            className="priceAnim w-[120px]"
                        />
                        <img
                            src={price}
                            alt=""
                            className="priceAnim w-[120px]"
                        />
                    </div>

                    <div className="flex justify-between items-center w-full absolute bottom-5">
                        <img src={star} alt="" className="h-[35px] starAnim" />
                        <img src={star} alt="" className="h-[25px] starAnim" />
                    </div>

                    {/* main img */}
                    <img src={people} alt="" className="w-full z-10" />
                </div>
            </div>

            <div className="hidden justify-between gap-[15px] bg-[#27932D]  rounded-3xl overflow-hidden max-[780px]:flex flex-col">
                <div className=" flex items-end relative h-[400px] max-[450px]:h-fit">
                    <div className="flex justify-between items-center w-full absolute top-15">
                        <img src={star} alt="" className="h-[35px] starAnim" />
                        <img src={star} alt="" className="h-[25px]" />
                        <img
                            src={multiStar}
                            alt=""
                            className="h-[50px] starAnim"
                        />
                    </div>

                    <div className="flex justify-between items-center w-full absolute top-3/5 z-14">
                        <img
                            src={price}
                            alt=""
                            className="priceAnim w-[120px]"
                        />
                        <img
                            src={price}
                            alt=""
                            className="priceAnim w-[120px]"
                        />
                    </div>

                    <div className="flex justify-between items-center w-full absolute bottom-5">
                        <img src={star} alt="" className="h-[35px] starAnim" />
                        <img src={star} alt="" className="h-[25px] starAnim" />
                    </div>

                    {/* main img */}
                    <img
                        src={mediaPeople}
                        alt=""
                        className="w-full z-10 h-full object-contain"
                    />
                </div>

                <div className="p-[40px] pt-[10px] max-[420px]:p-[20px] flex flex-col justify-between items-start gap-[25px]">
                    <h1 className="title !text-start !text-white leading-[110%] max-[935px]:!text-[20px]">
                        Получите приз <br />
                        за друзей
                    </h1>

                    <div className="flex flex-col gap-[20px] max-[935px]:**:min-h-[25px] max-[935px]:**:min-w-[25px] max-[935px]:**:text-[13px]">
                        <div className="flex justify-start items-center gap-[10px]">
                            <span className="min-h-[35px] min-w-[35px] bg-white rounded-full text-black font-bold flex justify-center items-center">
                                1
                            </span>

                            <p className="leading-[120%] text-white text-[14px] font-medium max-[935px]:font-normal">
                                Отправьте другу ссылку на участие в Акции
                            </p>
                        </div>

                        <div className="flex justify-start items-start gap-[10px]">
                            <span className="min-h-[35px] min-w-[35px] bg-white rounded-full text-black font-bold flex justify-center items-center">
                                2
                            </span>

                            <p className="leading-[120%] text-white text-[14px] font-medium max-[935px]:font-normal">
                                По итогам розыгрыша одна пара друзей получит
                                Сертификат на покупку в «Пятёрочке» на 4 000
                                рублей
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px] items-start">
                        <button className="btn bg-[#E92724] text-white">
                            Пригласить друга
                        </button>

                        <p className="text-[11px] font-medium text-white">
                            * Приглашение можно отправить после регистрации
                            первого чека.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FriendShare
