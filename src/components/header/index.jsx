import React, {useState} from "react"

import {Avatar, Popover} from "antd"

// img
import fav from "../../assets/icons/fav.svg"

// icons
import {HiOutlineUserCircle} from "react-icons/hi2"
import {IoClose} from "react-icons/io5"
import {LuMenu} from "react-icons/lu"

const Header = () => {
    const content = (
        <div className="grid grid-cols-2 gap-10 ">
            <div className="flex flex-col gap-[5px] text-[13px]">
                <p>Астраханская область</p>
                <p>Волгоградская область</p>
                <p>Республика Калмыкия</p>
                <p>Ростовская область</p>
                <p>Пензенская область</p>
                <p>Самарская область</p>
                <p>Саратовская область</p>
                <p>Ульяновская область</p>
                <p>Краснодарский край</p>
                <p>Ставропольский край</p>
            </div>

            <div className="flex flex-col gap-[5px] text-[13px]">
                <p>Кабардино-Балкарская</p>
                <p>Карачаево-Черкесская</p>
                <p>Северная Осетия</p>
                <p>Республика Адыгея</p>
                <p>Белгородская область</p>
                <p>Воронежская область</p>
                <p>Курская область</p>
                <p>Липецкая область</p>
                <p>Орловская область</p>
                <p>Тамбовская область</p>
            </div>
        </div>
    )

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="bg-gradient-to-b from-[#1a2d53cb] to-[#1a2d530c] backdrop-blur-[2px] text-white text-[13px] fixed top-0 w-full py-3 *:select-none !z-20">
            <nav className="customContainer flex justify-between items-center gap-[15px]">
                <img
                    src={fav}
                    alt="logo"
                    className="hidden max-[980px]:block h-[40px] w-[40px] z-[999]"
                />

                <Popover
                    className="max-[980px]:hidden"
                    content={content}
                    placement="bottomLeft"
                    trigger={"click"}
                    title={"Акция проходит в следующих регионах:"}>
                    <button className="btn bg-[#0000009c] hover:opacity-80 backdrop-blur-2xl">
                        Регионы участники
                    </button>
                </Popover>

                <nav
                    className={`flex gap-2 *:hover:!border  *:hover:!border-white max-[980px]:h-screen max-[980px]:w-full max-[980px]:font-medium max-[980px]:p-4 max-[980px]:left-0 max-[980px]:top-0 max-[980px]:bg-white max-[980px]:fixed  ${
                        menuOpen
                            ? "max-[980px]:translate-y-0"
                            : "max-[980px]:-translate-y-full"
                    } transition-transform duration-[.3s] max-[980px]:left-[0] max-[980px]:text-[18px] max-[980px]:z-[888] max-[980px]:!text-black max-[980px]:flex-col max-[980px]:items-end max-[980px]:gap-3 max-[980px]:justify-end max-[980px]:*:hover:border-black`}>
                    <nav
                        onClick={toggleMenu}
                        className="h-[35px] w-[35px] absolute top-[15px] right-[20px] justify-center items-center bg-black text-white text-[25px] rounded-full active:scale-98 hidden max-[980px]:flex">
                        <IoClose />
                    </nav>

                    <a href="#!" className="btn">
                        Как участвовать?
                    </a>
                    <a href="#!" className="btn">
                        Призы
                    </a>
                    <a href="#!" className="btn">
                        Победители
                    </a>
                    <a href="#!" className="btn">
                        Товары-партнёры
                    </a>
                    <a href="#!" className="btn">
                        Вопросы
                    </a>
                    <a href="#!" className="btn">
                        Правила
                    </a>

                    <nav className="hidden flex-col gap-4 max-[980px]:flex mt-3 *:text-white *:text-[12px] font-medium *:active:opacity-80 max-[430px]:w-full">
                        <button className="btn !py-[10px] !text-[17px] bg-[#E92724]">
                            Личный кабинет
                        </button>

                        <button className="btn !py-[10px] !text-[17px] bg-[#E92724]">
                            Зарегистрировать чек
                        </button>

                        <Popover
                            content={content}
                            placement="bottomLeft"
                            trigger={"click"}
                            title={"Акция проходит в следующих регионах:"}>
                            <button className="btn !py-[10px] !text-[17px] bg-black">
                                Регионы участники
                            </button>
                        </Popover>
                    </nav>
                </nav>

                <nav className="flex justify-center items-center gap-2">
                    <Avatar
                        className="cursor-pointer"
                        size={"large"}
                        style={{backgroundColor: "#fff"}}
                        icon={
                            <HiOutlineUserCircle className="text-black text-3xl" />
                        }
                    />

                    <nav
                        onClick={toggleMenu}
                        className="h-[40px] w-[40px] justify-center items-center bg-black text-white text-[22px] rounded-full active:scale-98 hidden max-[980px]:flex">
                        <LuMenu />
                    </nav>
                </nav>
            </nav>
        </header>
    )
}

export default Header
