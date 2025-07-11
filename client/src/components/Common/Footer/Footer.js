import React from 'react'
import AnimatedElement from '../Animation/AnimatedElement'
import Link from "next/link";

export default function Footer() {

  return (
    <div className="relative bottom-0 bg-[#272626]">
      <footer className="text-white body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* G Map  */}
          <AnimatedElement className=' rounded-lg '>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1234567890123!2d72.23456789012345!3d40.76543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bce73964920a51%3A0xa7fee29ae949485f!2sMarg'iloniy%20ko'chasi%2C%20Asaka%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1638183019041!5m2!1suz!2s" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1320.4690205886423!2d72.22620565541229!3d40.62105188136669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc8fda477b095d%3A0x274b38e00df12e5b!2sQishloq%20hojaligi!5e1!3m2!1sen!2s!4v1752003644959!5m2!1sen!2s"  width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </AnimatedElement>


          {/* Footer Links  */}
          {/* Departments */}
          <AnimatedElement className=" flex-grow flex flex-wrap mb-10 text-left order-first">
            {/* <div className="lg:w-2/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Bo'limlar</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/academics/departments/ece" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Raqamli texnologiyalar</Link>
                </li>
                <li>
                  <Link href="/academics/departments/cse" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Kompyuter tizimlari</Link>
                </li>
                <li>
                  <Link href="/academics/departments/csbs" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Dasturiy ta'minot</Link>
                </li>
                <li>
                  <Link href="/academics/departments/ee" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Elektrotexnika</Link>
                </li>
                <li>
                  <Link href="/academics/departments/eee" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Texnik ta'minot</Link>
                </li>
                <li>
                  <Link href="/academics/departments/me" className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Mexanika va avtomatika</Link>
                </li>
              </nav>
            </div> */}

            {/* Downloads */}
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">O'quv dasturlari</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Dasturiy ta'minot</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Kompyuter tizimlari</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Raqamli texnologiyalar</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Elektrotexnika</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Mexanika va avtomatika</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Texnik ta'minot</a>
                </li>
              </nav>
            </div> */}
            {/* Admission Enquiry */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Qabul ma'lumotlari</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='/DocFiles/Documents for Admission AOT.pdf' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Qabul uchun hujjatlar</a>
                </li>
                <li>
                  <Link href='/contact' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Biz bilan bog'lanish</Link>
                </li>

              </nav>
            </div>

            {/* AOT Online */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Ijtimoiy tarmoqlar</h2>
              <nav className="list-none mb-10">
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Telegram</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Instagram</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; YouTube</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; O'quv portali</a>
                </li>
                <li>
                  <a target='_blank' href='#' className="text-white hover:text-gray-300 cursor-pointer"> &#8658; Innovatsion markaz</a>
                </li>

              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Manzil</h2>

              <p className="text-white hover:text-gray-300 cursor-pointer">Andijon viloyati,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Asaka tumani, Chok MFY,</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">Marg'iloniy ko'chasi, 93-a-uy</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">O'zbekiston, 170200</p>
              <p className="text-white hover:text-gray-300 cursor-pointer">asaka.politexnikum@edu.uz</p>
              <h4 className="text-white hover:text-gray-300 cursor-pointer">+998 99 123-45-67</h4>
            </div>

          </AnimatedElement>
        </div>

        <div>
          <div>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-300 text-sm text-center sm:text-left">© 2024 Asaka tuman 2-son politexnikumi —
                <a rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">@asakapolytechnic</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-300" href='https://m.facebook.com/profile.php?id=100067475193505&name=xhp_nt_' target='_blank'>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300" href='https://www.instagram.com/aotconnect/' target='_blank'>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300" href='https://www.linkedin.com/school/academy-of-technology/' target='_blank'>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}