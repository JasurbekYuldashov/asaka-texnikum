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
                    <div className="mx-auto flex md:px-5 md:flex-row justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            {/* <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(1).jpg" /> */}
                            <video className="w-full md:rounded-lg" alt="hero" src='/Video/AOTCampus.mp4' autoPlay muted loop />
                        </div>
                        <div className="md:w-1/2  md:pl-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">
                                "Aspires to be a pre-eminent deemed university of national standing in education and innovation".
                            </h1> */}
                            <p className=" leading-relaxed font-medium text-sm sm:text-lg p-2">Asaka tuman 2-son politexnikumi (sobiq Asaka qishloq xo'jalik kasb-hunar kolleji) 1999 yil sentyabr oyida tashkil topgan. O'zbekiston Respublikasi Vazirlar Mahkamasining 1998 yil 23 sentyabrdagi 406-sonli qaroriga muvofiq ta'lim muassasasi tashkil topgan. <span className='font-bold'>Ta'lim muassasa 1999 yil 28 iyulda 259/1 son bilan davlat ro'yxatidan o'tkazilgan.</span></p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>


            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex md:px-5 md:flex-row-reverse justify-center flex-col items-center">
                        {/* <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0"> */}
                        {/* <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(1).jpg" /> */}
                        {/* </div> */}
                        <div className="md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">"Aspires to be a pre-eminent deemed university of national standing in education and innovation".
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">O'zbekiston Respublikasi Prezidentining 2019 yil 6 sentyabrdagi PF-5812-sonli Farmoni, Andijon viloyat kasbiy ta'limni rivojlantirish va muvofiqlashtirish boshqarmasining 2020 yil 1 iyundagi 251-sonli buyrug'i hamda qishloq xo'jalik kasb-hunar kollejining 2020 yil 23 iyundagi 01-01-365-sonli xatiga asosan Asaka tuman hokimining 27.06.2020 yildagi 496-q sonli qarori bilan Asaka qishloq xo'jalik kasb-hunar kolleji Asaka tuman 2-son kasb-hunar maktabiga o'zgartirilgan. O'zbekiston Respublikasi Prezidentining 2024 yil 16 oktyabrdagi 158-sonli Farmoni bilan Asaka tuman 2-son kasb-hunar maktabi Asaka tuman 2-son Politexnikumiga o'zgartirilgan va hozirda shu nom bilan faoliyat olib bormoqda.</p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>
        </>
    )
}
