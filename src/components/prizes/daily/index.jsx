import React, {useRef, useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"

// img
import img1 from "../../../assets/img/prizes/1.avif"
import img2 from "../../../assets/img/prizes/2.avif"
import img3 from "../../../assets/img/prizes/3.avif"
import img4 from "../../../assets/img/prizes/4.avif"
import img5 from "../../../assets/img/prizes/5.avif"
import img6 from "../../../assets/img/prizes/6.avif"
import img7 from "../../../assets/img/prizes/7.avif"
import img8 from "../../../assets/img/prizes/8.avif"

const DailyPrizes = () => {
    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(1)
    const totalSlides = 8

    const prizes = [
        {
            id: 1,
            image: img1,
            title: "Сертификат на сказочный отдых на зимних каникулах",
            count: 1,
        },
        {
            id: 2,
            image: img2,
            title: "Подарочный сертификат на покупки в магазинах",
            count: 15,
        },
        {
            id: 3,
            image: img3,
            title: "Сертификат на покупку текстиля для дома",
            count: 15,
        },
        {
            id: 4,
            image: img4,
            title: "Сертификат на покупку набора для чаепития",
            count: 3,
        },
        {
            id: 5,
            image: img5,
            title: "Сертификат на экипировку для активного отдыха",
            count: 7,
        },
        {
            id: 6,
            image: img6,
            title: "Сертификат на пополнение гардероба",
            count: 4,
        },
        {
            id: 7,
            image: img7,
            title: "Сертификат на покупку домашнего кинотеатра",
            count: 8,
        },
        {
            id: 8,
            image: img8,
            title: "Промокод «Пятёрочка Доставка»",
            count: 6,
        },
    ]

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev()
        }
    }

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext()
        }
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-[745px]:hidden">
                {prizes.map((prize) => (
                    <div
                        key={prize.id}
                        className="flex flex-col gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <img
                            src={prize.image}
                            alt={prize.title}
                            className="w-full h-[180px] object-contain"
                        />
                        <h3 className="font-bold text-md px-2 text-center leading-[120%]">
                            {prize.title}
                        </h3>
                        <p className="text-gray-600 text-center text-[11px]">
                            Количество призов за весь период акции:{" "}
                            <span className="text-black font-medium">
                                {prize.count}
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            {/* Mobile View - Swiper */}
            <div className="max-[745px]:block hidden">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentSlide(swiper.activeIndex + 1)
                    }}
                    className="px-4">
                    {prizes.map((prize) => (
                        <SwiperSlide key={prize.id}>
                            <div className="flex flex-col gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <img
                                    src={prize.image}
                                    alt={prize.title}
                                    className="w-full h-[180px] object-contain"
                                />
                                <h3 className="font-bold text-md px-2 text-center leading-[120%]">
                                    {prize.title}
                                </h3>
                                <p className="text-gray-600 text-center text-[11px]">
                                    Количество призов за весь период акции:{" "}
                                    <span className="text-black font-medium">
                                        {prize.count}
                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center items-center gap-[10px] text-[35px] font-bold mt-3 text-white">
                    <FaAngleLeft
                        onClick={handlePrev}
                        className="cursor-pointer"
                    />
                    <h1 className="text-[20px]">
                        {" "}
                        {currentSlide}/{totalSlides}
                    </h1>
                    <FaAngleRight
                        onClick={handleNext}
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default DailyPrizes
