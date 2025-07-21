
"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';

export default function Accordion() {
    const AccordionData = [
        {
            title: "O'qishga kimlar qabul qilinadi?",
            description: "Umumta'lim maktablari, ixtisoslashtirilgan maktablar hamda maxsus maktablarni 9-sinfini hamda 11-sinfini tamomlagano'quvchilar belgilangan tartibda o'qishga qabul qilinadlar."
        },
        {
            title: "Ta'lim olish pullikmi?",
            description: "Umumta'lim maktablari, ixtisoslashtirilgan maktablar hamda maxsus maktablarni 9-sinfini tamomlagano'quvchilar 2 yillik bepul ta'lim oladilar. 11-sinfini tamomlagan belgilangan kontrakt to'lovlari asosida ta'lim oladilar. Oliy ta'lim, fan va innovatsiyalar vazirligi tomonidan belgilab berilgan ayrim kunduzgi ta'lim bosqichlari bepul amalga oshiriladi."
        },
        {
            title: "Ta'lim muassasasidagi qo'shimcha xizmatlar pullik yo'lga qo'yilganmi?",
            description: "Ta'lim muassasasidagi barcha qo'shimcha xizmatlar, xususan kompyuter xonalaridan foydalanish, kutubxonadan foydalanish, fan va kasb to'garaklari, til kurslari va hokazolar bepul yo'lga qo'yilgan."
        },
        {
            title: "Ta'lim muassasasini tamomlagan dan so'ng qanday hujjat beriladi?",
            description: "Ta'lim muassasasini tamomlagano'quvchilarga 3, 4 va 5 darajadagi xalqaro tan olingan davlat namunsidagi professional ta'lim diplomlari beriladi."
        },
        {
            title: "O'qishga qabul qilish imtihon asosida amalga oshiriladimi?",
            description: "9 va 11-sinfni tamomlagano'quvchilar ta'lim muassasasiga suhbat asosida qabul qilinadi."
        },
        {
            title: "Ta'lim muassasasini tamomlaganadan so'ng qanday imkoniyatlar mavjud?",
            description: "Tamomlagan larga davlat namunsidagi diplom bilan birlikda belgilangan tartibda haydovchilik guvohnomasi olish uchun rasmiy hujjatlar tayyorlanadi, imtijonlarga tayyorgarlik ko'rsatiladi va o'z mutaxasisliklari bo'yicha ishga joylashtiriladi."
        },
        {
            title: "O'qishga topshirish uchun qanday hujjatlar talab etiladi?",
            description: "Attestat, 2x4 hajmda 6 dona fotosurat, ota-onasining pasport nusxalari va tibbiy ma'lumotnoma."
        },
        {
            title: "9-sinfni bir necha yil avval tamomlagan o'quvchi o'qishga qabul qilinadimi?",
            description: "Oliy ta'lim, fan va innovatsiyalar vazirligining ko'rsatmalariga asosan, 9-sinfni bir necha yil avval tamomlagano'quvchilar ham o'qishga qabul qilinadi."
        },
        {
            title: "Dars mashg'ulotlari qanday vaqtlarda olib boriladi?",
            description: "O'quvchilar soniga qarab 1 yoki 2 smenada: 1-smena 13:30 gacha, 2-smena 18:00 gacha."
        },
        {
            title: "Ta'lim muassasasida kunduzgi, kechki va sirtqi ta'lim shakllari mavjudmi?",
            description: "2025–2026 o'quv yilida kunduzgi va \"Dual\" ta'lim yo'lga qo'yilgan. Kechki va sirtqi ta'lim shakllarini yo'lga qo'yish rejalashtirilgan."
        }
    ];

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
