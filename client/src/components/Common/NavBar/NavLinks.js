"use client"
import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useAuth } from "@/context/auth";


function NavLinks() {
  const { authUser, IsLoading, setAuthUser } = useAuth();
  const links = [
    {
      title: "Bosh sahifa",
      path: "/",
    },
    {
      title: "Biz haqimizda",
      path: "/about",
    },
    {
      title: "Aloqa",
      path: "/contact",
    },
    {
      title: "Yangiliklar",
      path: "/events",
    },
    {
      title: "Yangiliklar",
      path: "/highlights",
    },
    {
      isDropdown: true,
      title: "O'quv jarayoni",
      links: [
        {
          title: "Rahbariyat",
          path: "/academics/departments",
        },
        {
          title: "Kutubxona",
          path: "/academics/resources/library",
        },
        {
          title: "O'quv tizimi",
          path: "/academics/resources/moodle",
        },
      ]
    },
    {
      title: "Talabalar",
      path: "/alumni",
    },
    // {
    //   title: "Administration",
    //   path: "/administration",
    // },
    {
      authDependent: true,
      title: "Kirish",
      path: "/login",
      Alttitle: "Boshqaruv paneli",
      Altpath: "/admin/dashboard",
    },
  ];

  return (
    <>
      {links.map((el, index) => (
        <React.Fragment key={index}>
          {(el.isDropdown) ?
            <Dropdown data={el} />
            :
            <li className="m-1 transition duration-300 ease-in-out transform hover:scale-110">
              {el.authDependent && authUser && authUser?.isAdmin ?
                <Link href={el.Altpath} className="font-bold text-white hover:underline px-2 bg-transparent">{el.Alttitle}</Link> :
                <Link href={el.path} className="font-bold text-white hover:underline px-2 bg-transparent">{el.title}</Link>
              }
            </li >
          }
        </React.Fragment>
      ))}
    </>

  )
}

export default NavLinks