import React, {useState} from "react"

// img
import img from "../../../src/assets/img/faq.avif"

// icons
import {FaChevronDown} from "react-icons/fa"

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const faqs = [
        {
            question: "Что необходимо сделать, чтобы принять участие в акции?",
            answer: "Совершить покупку в «Пятёрочке» от 500 руб. и зарегистрировать чек на сайте акции.",
        },
        {
            question: "Что такое XSID?",
            answer: "Единый аккаунт для всех сервисов X5, дающий доступ к сервисам торговых сетей «Пятёрочка» и «Перекрёсток», сервисам «5post», «Впрок», «Пакет», «FOOD.RU», и приложениям «Около», «Пятёрочка Налету» и «Многолосося».",
        },
        {
            question: "Как зарегистрировать чек, если у меня нет XSID?",
            answer: "Если участник ранее не был авторизован в X5ID, то ему будет предложено зарегистрироваться. Процесс регистрации максимально прост.",
        },
        {
            question: "Как зарегистрировать чек?",
            answer: "Зарегистрировать чек можно сканировав QR код или введя данные чека ФН ФД ФП в специальные поля предусмотренные для ручной загрузки.",
        },
    ]

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="py-[50px]">
            <div className="flex justify-between items-start gap-[20px] max-[768px]:flex-col max-[768px]:items-center">
                <div className="bg-white rounded-2xl p-[20px] flex-[3] max-[400px]:p-[15px]">
                    <h1 className="title !text-start leading-[120%] mb-3 max-[768px]:!text-[20px]">
                        Ответы на часто <br /> задаваемые вопросы
                    </h1>

                    <div className="flex flex-col">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`" p-3 " ${
                                    activeIndex === index
                                        ? "border border-[#00000087] rounded-2xl"
                                        : ""
                                } `}>
                                <button
                                    className="w-full text-left py-1 flex justify-between items-center text-gray-600 hover:text-[#000] transition-colors"
                                    onClick={() => toggleFAQ(index)}>
                                    <h2
                                        className={`text-[15px] font-medium ${
                                            activeIndex === index
                                                ? "text-black"
                                                : ""
                                        }`}>
                                        {faq.question}
                                    </h2>
                                </button>

                                {activeIndex === index && (
                                    <div className="text-black text-[13px]">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center gap-[20px] mt-4 max-[400px]:flex-col max-[400px]:items-start max-[400px]:gap-[10px]  max-[400px]:*:w-[80%]">
                        <button className="btn !border-black flex justify-center items-center gap-2 text-[12px] font-medium">
                            Больше вопросов <FaChevronDown />
                        </button>

                        <button className="btn bg-[#E92724] text-white text-[12px] font-medium">
                            Задать вопрос
                        </button>
                    </div>
                </div>

                <div className="flex justify-start items-start p-[20px] flex-[2] max-[850px]:flex-1">
                    <img
                        src={img}
                        alt="FAQ illustration"
                        className="h-[240px] object-contain max-[850px]:h-[140px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default FAQ
