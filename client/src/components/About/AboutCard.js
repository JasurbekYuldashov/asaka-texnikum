import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React from 'react'

export default function AboutCard() {
    return (
        <>
            <AnimatedElement>
                <h1 className="m-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| BIZ</span> HAQIMIZDA :</h1>
            </AnimatedElement>

            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-6 md:px-5 md:flex-row justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            {/* <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(1).jpg" /> */}
                            <video className="w-full md:rounded-lg" alt="hero" src='/Video/AOTCampus.mp4' autoPlay muted loop />
                        </div>
                        <div className="md:w-1/2  md:pl-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">
                                “Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">Асака туман 2-сон политехникуми (собиқ Асака қишлоқ хўжалик касб-ҳунар коллежи) 1999 йил сентябр ойида ташкил топган. Ўзбекистон Республикаси Вазирлар Маҳкамасининг 1998 йил 23 сентябрдаги 406-сонли қарорига мувофиқ таълим муассасаси ташкил топган. <span className='font-bold'>Таълим муассаса 1999 йил 28 июлда 259/1 сон билан давлат рўйхатидан ўтказилган.</span></p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>


            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-10 md:px-5 md:flex-row-reverse justify-center flex-col items-center">
                        {/* <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0"> */}
                            {/* <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(1).jpg" /> */}
                        {/* </div> */}
                        <div className="md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">“Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">Ўзбекистон Республикаси Президентининг 2019 йил 6 сентябрдаги ПФ-5812-сонли Фармони, Андижон вилоят касбий таълимни ривожлантириш ва мувофиқлаштириш бошқармасининг 2020 йил 1 июндаги 251-сонли буйруғи ҳамда қишлоқ хўжалик касб-ҳунар коллежининг 2020 йил 23 июндаги 01-01-365-сонли хатига асосан Асака туман ҳокимининг 27.06.2020 йилдаги 496-қ сонли қарори билан Асака қишлоқ хўжалик касб-ҳунар коллежи Асака туман 2-сон касб-ҳунар мактабига ўзгартирилган. Ўзбекистон Республикаси Президентининг 2024 йил 16 октябрдаги 158-сонли Фармони билан Асака туман 2-сон касб-ҳунар мактаби Асака туман 2-сон Политехникумига ўзгартирилган ва ҳозирда шу ном билан фаолият олиб бормоқда.</p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>
        </>
    )
}
