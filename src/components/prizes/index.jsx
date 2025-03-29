import React, {useState} from "react"
import MainPrize from "./main"
import DailyPrizes from "./daily"
import PartnerPrize from "./partner"
import InvitePrize from "./invite"

const Prizes = () => {
    const tabs = [
        {id: "main", title: "Главный приз", component: <MainPrize />},
        {id: "daily", title: "Еженедельные призы", component: <DailyPrizes />},
        {
            id: "partner",
            title: "За покупку товаров-партнёров",
            component: <PartnerPrize />,
        },
        {
            id: "invite",
            title: "За приглашение друга",
            component: <InvitePrize />,
        },
    ]

    const [activeTab, setActiveTab] = useState(null)

    return (
        <section className="py-[20px]">
            <h1 className="title mb-5 max-[560px]:!text-start">
                Что можно выиграть?
            </h1>

            <div>
                <div className="grid grid-cols-4 gap-[14px] *:text-[11px] *:cursor-pointer font-medium max-[768px]:grid-cols-2 max-[400px]:grid-cols-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`btn transition-colors duration-200 ${
                                (activeTab === null && tab.id === "main") ||
                                activeTab === tab.id
                                    ? "bg-white text-black"
                                    : "bg-transparent !border-black hover:bg-gray-50"
                            }`}>
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                {activeTab === null ? (
                    <MainPrize />
                ) : (
                    tabs.find((tab) => tab.id === activeTab)?.component
                )}
            </div>

            <div className="mt-4 flex justify-center items-center">
                <p className="text-[9px] bg-[#00000024] p-[5px_15px] rounded-full text-center">
                    Розыгрыши проходят по определённым дням в соответствии с{" "}
                    <a href="#!" className="text-red-600 underline">
                        правилами акции.
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Prizes
