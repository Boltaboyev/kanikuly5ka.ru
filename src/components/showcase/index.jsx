import React from "react"
import Snowfall from "react-snowfall"

// img
import shineText from "../../assets/img/showcase/shine-text.avif"
import certificate1 from "../../assets/img/showcase/certificate-1.avif"
import certificate2 from "../../assets/img/showcase/certificate-2.avif"
import family from "../../assets/img/showcase/family.avif"

// icons
import logo from "../../assets/icons/logo.svg"
import {LiaShoppingBasketSolid} from "react-icons/lia"
import {RiFilePaper2Line} from "react-icons/ri"
import {GrGift} from "react-icons/gr"

const Showcase = () => {
    return (
        <section className="pt-[100px] pb-[75px] text-white bg-[url(../src/assets/img/showcase/showcase-bg.avif)] bg-center bg-cover bg-no-repeat">
            <Snowfall snowflakeCount={150} speed={"10"} style={{zIndex: 10}} />

            <div className="customContainer">
                <div className="flex flex-col gap-[5px] items-start w-full relative *:z-10 max-[554px]:overflow-hidden">
                    <div className="flex justify-between items-start w-full">
                        <div>
                            <h1 className=" text-[4rem] leading-[100%] font-bold tracking-[-0.02em] max-[400px]:text-[2.5rem]">
                                500 000 ₽
                            </h1>

                            <img
                                src={shineText}
                                alt=""
                                className="w-[290px] -translate-x-2 max-[400px]:w-[170px]"
                            />
                        </div>

                        <img
                            src={logo}
                            alt="logo"
                            className="h-[130px] max-[980px]:hidden"
                        />
                    </div>

                    <p className="text-[1.2rem] mb-2">1 октября – 4 ноября</p>

                    <div className="relative w-[220px] h-[220px] hidden max-[930px]:block m-4">
                        <img
                            src={certificate1}
                            alt=""
                            className="animate-img-left absolute w-[180px] z-10 max-[455px]:w-[140px] max-[455px]:top-7"
                        />

                        <img
                            src={certificate2}
                            alt=""
                            className="animate-img-right absolute w-[170px] bottom-[45px] -right-[50px] max-[455px]:w-[140px] max-[455px]:left-[30%]"
                        />
                    </div>

                    <button className="bg-[#E92724] my-2 p-[13px_50px]  max-[930px]:p-[16px_10px] max-[930px]:w-[60%] max-[440px]:w-[300px] max-[320px]:w-[250px] max-[320px]:p-[12px_10px]  rounded-[30px] active:scale-98 font-medium">
                        Зарегистрировать чек
                    </button>

                    <div className="flex justify-between items-center gap-[20px] w-full">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex justify-start items-center gap-[15px] max-[400px]:gap-[10px]">
                                <div className="flex justify-center items-center h-[50px] w-[50px] max-[400px]:h-[40px] max-[400px]:w-[40px] max-[400px]:text-[20px] text-[27px] rounded-full bg-[#E92724] border-2 border-white">
                                    <LiaShoppingBasketSolid />
                                </div>

                                <p className="font-medium leading-[130%]">
                                    Покупайте от <br /> 500 ₽ в чеке
                                </p>
                            </div>

                            <div className="flex justify-start items-center gap-[15px] max-[400px]:gap-[10px]">
                                <div className="flex justify-center items-center h-[50px] w-[50px] max-[400px]:h-[40px] max-[400px]:w-[40px] max-[400px]:text-[20px] text-[25px] rounded-full bg-[#E92724] border-2 border-white">
                                    <RiFilePaper2Line />
                                </div>

                                <p className="font-medium leading-[130%]">
                                    Регистрируйте чеки на сайте
                                </p>
                            </div>

                            <div className="flex justify-start items-center gap-[15px] max-[400px]:gap-[10px]">
                                <div className="flex justify-center items-center h-[50px] w-[50px] max-[400px]:h-[40px] max-[400px]:w-[40px] max-[400px]:text-[20px] text-[25px] rounded-full bg-[#E92724] border-2 border-white">
                                    <GrGift />
                                </div>

                                <p className="font-medium leading-[130%]">
                                    Выиграйте путешествие <br /> и другие призы
                                </p>
                            </div>
                        </div>

                        <div className="relative w-[220px] h-[220px] max-[930px]:hidden">
                            <img
                                src={certificate1}
                                alt=""
                                className="animate-img-left absolute w-[200px] top-3 -left-[80px] z-10"
                            />

                            <img
                                src={certificate2}
                                alt=""
                                className="animate-img-right absolute w-[190px] bottom-3 right-0"
                            />
                        </div>
                    </div>

                    {/* family img */}
                    <img
                        src={family}
                        alt="family"
                        className="absolute h-[90%] !z-5 translate-x-3/6 translate-y-6 max-[930px]:h-[60%] max-[710px]:h-[60%] max-[710px]:top-[20%] max-[710px]:object-cover max-[710px]:left-[0%] max-[930px]:translate-0 max-[930px]:top-[20%] max-[930px]:left-[20%] max-[650px]:h-[45%] max-[650px]:left-[15%] max-[650px]:top-[20%]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Showcase
