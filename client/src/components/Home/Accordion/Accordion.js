"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';

export default function Accordion() {
    const AccordionData = [
        {
            "title": "O'qishga kirish vaqtida oddiy talabalar uchun to'lanadigan umumiy to'lov qancha?",
            "description": "O'qishga kirish vaqtida oddiy talabalar uchun to'lanadigan umumiy to'lov 5,000,000 so'm."
        },
        {
            "title": "Imtiyozli talabalar uchun o'qishga kirish to'lovi qancha?",
            "description": "Imtiyozli talabalar uchun o'qishga kirish to'lovi 2,500,000 so'm."
        },
        {
            "title": "Bir semestr uchun o'qish to'lovi qancha?",
            "description": "Bir semestr uchun o'qish to'lovi 2,500,000 so'm."
        },
        {
            "title": "Politexnikum tomonidan qo'shimcha to'lovlar talab qilinadimi?",
            "description": "Ha, qo'shimcha to'lovlar talab qilinadi, jumladan: 1) Rivojlantirish fondi uchun yillik 55,000 so'm 2) Ro'yxatga olish uchun bir martalik 50,000 so'm to'lov"
        },
        {
            "title": "Depozit to'lovlari qaytariladimi?",
            "description": "Ha, 1,000,000 so'mlik depozit to'lovi qaytariladi."
        },
        {
            "title": "To'lovlar qanday amalga oshiriladi?",
            "description": "To'lovlar naqd pul yoki 'АСАКА ТУМАН 2-СОН ПОЛИТЕХНИКУМИ' nomiga pul o'tkazmasi orqali amalga oshirilishi mumkin."
        },
        {
            "title": "O'qish to'lovlari o'zgarishi mumkinmi?",
            "description": "Ha, o'qish to'lovlari O'zbekiston Respublikasi Vazirlar Mahkamasining qarorlari asosida o'zgartirilishi mumkin."
        },
        {
            "title": "Talabalar sug'urtasi nima va u qanchaga tushadi?",
            "description": "Talabalar sug'urtasi - bu talabalar uchun tibbiy sug'urta bo'lib, uning narxi bir martalik 250,000 so'm to'lovni tashkil etadi."
        },
        {
            "title": "Kutubxona xizmatlari uchun to'lov qancha?",
            "description": "Kutubxona to'lovi, kitoblar, jurnallar va raqamli kutubxonadan foydalanishni o'z ichiga oladi va bir martalik 600,000 so'm to'lovni tashkil qiladi."
        }
    ]

    return (
        <div className='mb-10'>
            <AnimatedElement>
                <h1 className="m-4 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| KO'P BERILADIGAN SAVOLLAR</span> :</h1>
            </AnimatedElement>
            {AccordionData.map((data, index) => (
                <AccordionCard key={index} title={data.title} description={data.description} />
            ))}
        </div>

    )
}
