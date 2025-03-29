import React, {useRef, useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"

// img
import img1 from "../../assets/img/partner-products/1.avif"
import img2 from "../../assets/img/partner-products/2.avif"
import img3 from "../../assets/img/partner-products/3.avif"
import img4 from "../../assets/img/partner-products/4.avif"
import img5 from "../../assets/img/partner-products/5.avif"
import img6 from "../../assets/img/partner-products/6.avif"
import img7 from "../../assets/img/partner-products/7.avif"
import img8 from "../../assets/img/partner-products/8.avif"
import img9 from "../../assets/img/partner-products/9.avif"
import img10 from "../../assets/img/partner-products/10.avif"
import img11 from "../../assets/img/partner-products/11.avif"

const Products = () => {
    const swiperRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(1)
    const totalSlides = 11

    const products = [
        {
            id: 1,
            image: img1,
            title: "Коктейль молочный Растишка, в ассортименте, 2,0%, 210 г",
        },
        {
            id: 2,
            image: img2,
            title: "Растительное молоко Nemoloko*, 200 — 1000 мл",
        },
        {
            id: 3,
            image: img3,
            title: "Мороженое Магнат, в ассортименте, 8%, 70-74 г",
        },
        {
            id: 4,
            image: img4,
            title: "Сыр Liebendorf*, в ассортименте, 45-55%, 100- 400 г",
        },
        {
            id: 5,
            image: img5,
            title: "Мясо и мясные полуфабрикаты Мираторг, 0,19-2,2 кг",
        },
        {
            id: 6,
            image: img6,
            title: "Конфеты РотФронт и Красный Октябрь, в ассортименте",
        },
        {
            id: 7,
            image: img7,
            title: "Геркулес, в ассортименте, Русский Продукт, 350-500 г",
        },
        {
            id: 8,
            image: img8,
            title: "Семечки Кукусики, в ассортименте, 80-200 г",
        },
        {
            id: 9,
            image: img9,
            title: "Корм для кошек влажный Гурмэ, в ассортименте, 75 г",
        },
        {
            id: 10,
            image: img10,
            title: "Свежая выпечка собственного производства",
        },
        {
            id: 11,
            image: img11,
            title: "Ассортимент готовой кулинарии",
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
        <section className="py-[25px]">
            <h1 className="title !text-start">Товары-партнёры</h1>

            <div className="flex justify-between items-center gap-[10px] mb-6">
                <p className="text-[14px] leading-[130%]">
                    Регистрируйте чек с товаром-партнёром на любую сумму и
                    получайте 1 дополнительный шанс{" "}
                    <br className="max-[820px]:hidden" /> на участия в розыгрыше
                    еженедельных и главного призов
                </p>

                <div className="flex justify-center items-center gap-[10px] text-[35px] font-bold text-white max-[820px]:hidden">
                    <button onClick={handlePrev} className="focus:outline-none">
                        <FaAngleLeft className="cursor-pointer" />
                    </button>
                    <h1 className="text-[20px]">
                        {currentSlide}/{totalSlides}
                    </h1>
                    <button onClick={handleNext} className="focus:outline-none">
                        <FaAngleRight className="cursor-pointer" />
                    </button>
                </div>
            </div>

            <div className="my-5">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={5}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentSlide(swiper.activeIndex + 1)
                    }}
                    className="rounded-3xl">
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="flex flex-col gap-[10px] px-2">
                                <div className="flex justify-center items-center rounded-3xl bg-white overflow-hidden h-[200px]">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <p className="text-[13px] font-medium leading-[130%] text-center max-[640px]:w-[70%] m-auto">
                                    {product.title}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden justify-center items-center gap-[10px] text-[35px] font-bold text-white max-[820px]:flex">
                <button onClick={handlePrev} className="focus:outline-none">
                    <FaAngleLeft className="cursor-pointer" />
                </button>
                <h1 className="text-[20px]">
                    {currentSlide}/{totalSlides}
                </h1>
                <button onClick={handleNext} className="focus:outline-none">
                    <FaAngleRight className="cursor-pointer" />
                </button>
            </div>

            <div className="mt-10 flex justify-center items-center">
                <p className="text-[9px] bg-[#00000024] p-[5px_15px] rounded-full text-center">
                    * В акции не участвуют алкогольная продукция, табак,
                    табачные изделия или никотинсодержащая продукция и
                    лотерейные билеты
                </p>
            </div>
        </section>
    )
}

export default Products
