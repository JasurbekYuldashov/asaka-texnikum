"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/navigation';
import FetchEventDataByIdFunc from "@/Helper/FetchEventDataByIdFunc";
import ParagraphSkeletonLoader from "@/components/Common/SkeletonLoader/ParagraphSkeletonLoader";
import { UpdateEvent } from "@/Helper/UpdateEvent";
import ColorRingLoader from "@/components/Common/Others/ColorRingLoader";
import Swal from 'sweetalert2';

export default function page({ params }) {
  const { eventid } = params;
  const { authUser, IsLoading, setAuthUser } = useAuth();
  const [PageLoader, setPageLoader] = useState(false);
  const [RingLoader, setRingLoader] = useState(false);

  const [PosterURL, setPosterURL] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const nav = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  const GetQueryEventData = async () => {
    setPageLoader(true);
    try {
      const res = await FetchEventDataByIdFunc(eventid);
      if (res.success) {
        const QueryEventData = res.data;
        // console.warn(QueryEventData)
        setPosterURL(QueryEventData.posterURL);
        setTitle(QueryEventData.title);
        setDetails(QueryEventData.details);
      }
    } catch (error) {
      console.error(error);
    }
    setPageLoader(false);
  }

  useEffect(() => {
    if (!IsLoading && !(authUser && authUser?.isAdmin)) {
      nav.push("/login");
    }
    // else if (authUser && authUser?.isAdmin) {
    //   GetQueryEventData();
    // }
    GetQueryEventData();
  }, [authUser, IsLoading])


  // Rasm URL'ni to'g'rilash
  const getImageUrl = (url) => {
    if (!url) return '/placeholder.jpg';
    // Agar to'liq URL bo'lsa (Cloudinary), shunday qaytarish
    if (url.startsWith('http')) return url;
    // Agar nisbiy yo'l bo'lsa, server URL qo'shish
    return process.env.NEXT_PUBLIC_SERVERURL + url;
  };

  const UpdateChange = async () => {
    setRingLoader(true);
    try {
      const res = await UpdateEvent(title, details, eventid);
      if (res.success) {
        Swal.fire(
          'Muvaffaqiyatli!',
          'Tadbir tahrirlandi.',
          'success'
        )
      }
    } catch (error) {
      console.error(error);
    }
    setRingLoader(false);
  }


  return (<>
    {PageLoader && <ParagraphSkeletonLoader />}
    {(authUser && authUser?.isAdmin) && !PageLoader &&
      <div className="my-10 m-2">
        <h2 className="text-center text-4xl font-bold pb-10">Tadbirni Tahrirlash</h2>
        <div className="max-w-sm mx-auto" >
          <div className="mb-5">
            <img className="md:h-48 h-40 w-full mb-2 rounded-lg object-cover object-center" src={getImageUrl(PosterURL)} alt="Poster" />
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tadbir nomi
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tadbir nomini kiriting..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="details"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tadbir haqida ma'lumot
            </label>
            <textarea
              id="details"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tadbir haqida batafsil ma'lumot kiriting..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>

          {RingLoader ? <ColorRingLoader /> :
            <button
              onClick={UpdateChange}
              className="w-full bg-blue-700 py-4 rounded-lg text-white hover:bg-blue-800"
            >
              Tadbirni Yangilash
            </button>
          }
        </div>
      </div>
    }
  </>);
};


