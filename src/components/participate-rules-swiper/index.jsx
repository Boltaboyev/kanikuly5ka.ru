import React, {useRef, useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import {FaAngleRight} from "react-icons/fa6"

// Import images
import card1 from "../../assets/img/participate-info/1.avif"
import card2 from "../../assets/img/participate-info/2.avif"
import card3 from "../../assets/img/participate-info/3.avif"
import card4 from "../../assets/img/participate-info/4.avif"

const ParticipateRulesSwiper = () => {
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

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
                            Отправьте другу ссылку на участие в Акции
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

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext()
        }
    }

    return (
        <section className="py-[60px] relative">
            <h1 className="title mb-5 max-[560px]:!text-[22px] max-[560px]:w-[200px] max-[560px]:!text-start leading-[130%]">
                Как принять участие в акции?
            </h1>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex)
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="participate-swiper">
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-2xl bg-white relative flex flex-col gap-[10px] justify-between items-start p-5 overflow-hidden h-[450px]">
                            <img
                                src={card.img}
                                alt={`card${index + 1}`}
                                className="h-[210px] object-contain absolute -right-1 -top-1"
                            />

                            <h1 className="text-[4rem] font-bold text-[#ededed]">
                                {index + 1}
                            </h1>

                            <h2
                                className="text-[1.2rem] leading-[120%] font-bold max-[430px]:mt-[80px]"
                                dangerouslySetInnerHTML={{
                                    __html: card.title,
                                }}
                            />

                            <div className="flex flex-col gap-[10px]">
                                {card.content}
                            </div>

                            <div className="flex justify-between items-center gap-[10px] w-full">
                                <button className="btn bg-[#E92724] text-white font-medium mt-2">
                                    Участвовать
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="h-[40px] w-[40px] rounded-full bg-[#E92724] text-white flex justify-center items-center active:scale-98">
                                    <FaAngleRight />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center gap-2 mt-4">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`w-2 h-2 rounded-full ${
                            activeIndex === index
                                ? "bg-[#27932d]"
                                : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default ParticipateRulesSwiper
