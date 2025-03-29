import React from "react"

// img
import footerLogo from "../../../src/assets/icons/footer-logo.svg"
import qr from "../../../src/assets/img/qr.avif"
import app from "../../../src/assets/img/app.png"

// icons
import {FaVk} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {SiOdnoklassniki} from "react-icons/si"
import {FaYandex} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-[#263852] pt-[30px] text-white">
            <div className="customContainer flex flex-col gap-[10px]">
                <div className="grid grid-cols-3 gap-[15px] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:*:text-center max-[800px]:gap-[15px]">
                    <div className="flex flex-col gap-[60px]">
                        <img src={footerLogo} alt="" className="w-[180px]" />

                        <p className=" text-[13px] max-[800px]:hidden">
                            © 2024 ООО «Агроторг». Любое использование контента
                            без письменного разрешения ООО «Агроторг» запрещено.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-[10px] pl-10 max-[800px]:p-0">
                        <div className="flex flex-col gap-[10px]  text-[13px] *:underline *:cursor-pointer *:hover:no-underline">
                            <p>Правила акции</p>
                            <p>Политика конфиденциальности</p>
                            <p>Политика в отношении обработки</p>
                        </div>

                        <div className="flex flex-col gap-[10px] max-[800px]:mt-3">
                            <p className="text-[15px]">
                                Заходите в гости в социальных сетях:
                            </p>
                            <div className="flex justify-start items-center gap-[10px] max-[800px]:justify-center">
                                <div className="flex justify-center items-center border border-white h-[30px] w-[30px] rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-[.2s]">
                                    <FaVk />
                                </div>

                                <div className="flex justify-center items-center border border-white h-[30px] w-[30px] rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-[.2s]">
                                    <FaTelegramPlane />
                                </div>

                                <div className="flex justify-center items-center border border-white h-[30px] w-[30px] rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-[.2s]">
                                    <SiOdnoklassniki />
                                </div>

                                <div className="flex justify-center items-center border border-white h-[30px] w-[30px] rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-[.2s]">
                                    <FaWhatsapp />
                                </div>

                                <div className="flex justify-center items-center border border-white h-[30px] w-[30px] rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-[.2s]">
                                    <FaYandex />
                                </div>
                            </div>
                        </div>
                    </div>

                    <img
                        src={app}
                        alt=""
                        className="hidden max-[800px]:block mt-3 active:scale-98"
                    />

                    <div className="flex flex-col items-end gap-1 max-[800px]:hidden">
                        <img src={qr} alt="" className="h-[100px]" />
                        <small className="text-center text-[10px]">
                            Отсканируйте QR-код <br /> для перехода <br /> в
                            приложение
                        </small>
                    </div>
                </div>

                <div className="flex flex-col bg-[#ffffff1a] p-[15px] rounded-2xl mt-10 text-center">
                    <h1 className="text-[17px] font-bold">
                        Телефон службы поддержки:{" "}
                        <br className="hidden max-[440px]:block" /> 8 800 550 37
                        22
                    </h1>
                    <p className="text-[14px]">
                        График работы — ежедневно с 10:00 до 20:00 по
                        московскому времени.
                    </p>
                </div>

                <div className="flex flex-col gap-[10px] bg-[#ffffff1a] p-[15px_30px] max-[440px]:p-[15px] rounded-[16px_16px_0_0] max-[800px]:rounded-2xl mt-2 text-center">
                    <small className="text-[12px]">
                        Общий срок проведения акции с 1.10.2024 по 04.12.2024 г.
                        Период совершения покупок и регистрации чеков для
                        участия в акции с 1.10.2024 по 4.11.2024. Акция проходит
                        не во всех магазинах ТС «Пятерочка». Регионы, в которых
                        расположены магазины, участвующие в акции, уточняйте в
                        правилах и на сайте акции{" "}
                        <span className="text-blue-400 underline hover:no-underline cursor-pointer">
                            kanikuly5ka.ru.
                        </span>
                    </small>

                    <small className="text-[12px]">
                        В акции участвуют не все категории товаров. Информацию
                        об организаторе акции, условиях участия, правилах
                        проведения, призах, их количестве, сроках, месте и
                        порядке их получения узнавайте на сайте{" "}
                        <span className="text-blue-400 underline hover:no-underline cursor-pointer">
                            kanikuly5ka.ru.
                        </span>{" "}
                        и в правилах акции
                    </small>
                </div>

                <p className=" text-[12px] font-medium text-center my-5 hidden max-[800px]:block">
                    © 2024 ООО «Агроторг».{" "}
                    <br className="hidden max-[440px]:block" /> Любое
                    использование контента без письменного разрешения ООО
                    «Агроторг» запрещено.
                </p>
            </div>
        </footer>
    )
}

export default Footer
