import React from "react"

// components
import Header from "./components/header"
import Footer from "./components/footer"
import Showcase from "./components/showcase"
import ParticipateRules from "./components/participate-rules"
import ParticipateRulesSwiper from "./components/participate-rules-swiper"
import Prizes from "./components/prizes"
import Products from "./components/products"
import FriendShare from "./components/friend-share"
import FAQ from "./components/FAQ"

const App = () => {
    return (
        <>
            <Header />
            <Showcase />
            <main className="main">
                <div className="customContainer">
                    <section className="max-[900px]:hidden">
                        <ParticipateRules />
                    </section>

                    <section className="hidden max-[900px]:block">
                        <ParticipateRulesSwiper />
                    </section>

                    <Prizes />
                    <Products />
                    <FriendShare />
                    <FAQ />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App
