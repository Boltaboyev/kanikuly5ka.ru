import React, {useState} from "react"

// img
import card1 from "../../assets/img/participate-info/1.avif"
import card2 from "../../assets/img/participate-info/2.avif"
import card3 from "../../assets/img/participate-info/3.avif"
import card4 from "../../assets/img/participate-info/4.avif"

// icons
import {FaAngleRight} from "react-icons/fa6"

const ParticipateRules = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNextCard = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        )
    }

    const cards = [
        {
            title: "Главный приз",
            img: card1,
            content: (
                <>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            1
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            Совершите покупку в Пятёрочке <br /> на сумму от
                            500₽
                        </p>
                    </div>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            2
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            Зарегистрируйте чек на сайте
                        </p>
                    </div>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            3
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            Участвуйте в розыгрыше главного <br /> приза —
                            сертификат на зимние <br /> каникулы стоимостью
                        </p>
                    </div>
                </>
            ),
        },
        {
            title: "Покупайте на 500₽",
            img: card2,
            content: (
                <>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            1
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            Совершите покупку в Пятёрочке <br /> на сумму от
                            500₽
                        </p>
                    </div>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            2
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            Зарегистрируйте чек на сайте
                        </p>
                    </div>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            3
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            Участвуйте в розыгрыше <br /> еженедельных призов
                        </p>
                    </div>
                </>
            ),
        },
        {
            title: "Регистрируйте чек <br /> с товаром-партнёром",
            img: card3,
            content: (
                <div className="flex justify-start items-start gap-[7px]">
                    <p className="text-[13px] font-medium leading-[120%] opacity-80">
                        Получите дополнительный шанс <br /> в розыгрыше
                        еженедельного <br /> и главного призов
                    </p>
                </div>
            ),
        },
        {
            title: "Получите приз <br /> за друзей",
            img: card4,
            content: (
                <>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            1
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            Отправьте другу ссылку на <br /> участие в Акции
                        </p>
                    </div>
                    <div className="flex justify-start items-start gap-[7px]">
                        <span className="text-[#27932d] bg-[#F4F4F4] h-[25px] w-[25px] rounded-full flex justify-center items-center font-medium text-[11px]">
                            2
                        </span>
                        <p className="text-[13px] font-medium leading-[120%] opacity-80">
                            По итогам розыгрыша одна пара <br /> друзей получит
                            Сертификат на покупку <br /> в «Пятёрочке» на 4 000
                            рублей
                        </p>
                    </div>
                </>
            ),
        },
    ]

    return (
        <section className="py-[60px] relative">
            <h1 className="title mb-5">Как принять участие в акции?</h1>

            <div>
                <div className="grid grid-cols-[2fr_5fr] gap-[20px]  m-auto">
                    <div className="flex flex-col gap-[10px] justify-between">
                        {[
                            "Главный приз",
                            "Еженедельный розыгрыш призов",
                            "За покупку товаров-партнёров акции",
                            "За приглашение друзей",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className={`flex justify-between items-center gap-[10px] p-1 h-[90px] rounded-2xl overflow-hidden cursor-pointer select-none
                                    ${
                                        activeIndex === index
                                            ? "bg-[#27932d] text-white"
                                            : "bg-[#F4F4F4]"
                                    }`}
                                onClick={() => setActiveIndex(index)}>
                                <div className="flex-1/3 h-full rounded-2xl flex justify-center items-center text-[25px] font-medium">
                                    {index + 1}
                                </div>
                                <div
                                    className={`h-full w-full !bg-[#fff] text-[#3d3d3d] rounded-xl flex justify-start items-center pl-[15px] text-[14px] leading-[120%]`}>
                                    <p className="w-[90%]">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-full">
                        <div className="rounded-2xl bg-white relative flex flex-col gap-[10px] justify-between items-start p-5 overflow-hidden h-full">
                            {/* card img */}
                            <img
                                src={cards[activeIndex].img}
                                alt={`card${activeIndex + 1}`}
                                className="h-[310px] object-contain absolute -right-1 -top-1"
                            />

                            <h1 className="text-[5rem] font-bold text-[#ededed]">
                                {activeIndex + 1}
                            </h1>

                            <h2
                                className="text-[1.4rem] leading-[120%] font-bold"
                                dangerouslySetInnerHTML={{
                                    __html: cards[activeIndex].title,
                                }}
                            />

                            <div className="flex flex-col gap-[10px]">
                                {cards[activeIndex].content}
                            </div>

                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <button className="btn bg-[#E92724] text-white font-medium mt-2">
                                    Участвовать
                                </button>

                                <button
                                    onClick={handleNextCard}
                                    className="h-[40px] w-[40px] rounded-full bg-[#E92724] text-white flex justify-center items-center active:scale-98">
                                    <FaAngleRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ParticipateRules
