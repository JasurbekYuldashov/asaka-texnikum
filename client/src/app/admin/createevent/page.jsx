"use client";
import { CreateEvent } from "@/Helper/CreateEvent";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import ColorRingLoader from "@/components/Common/Others/ColorRingLoader";

const Page = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState();
  const [RingLoader, setRingLoader] = useState(false);

  const nav = useRouter();
  const { authUser, IsLoading, setAuthUser } = useAuth();

  useEffect(() => {
    if (!IsLoading && !(authUser && authUser?.isAdmin)) {
      nav.push("/login");
    }
  }, [authUser, IsLoading])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      Swal.fire(
        'Xatolik!',
        'Iltimos, rasm yuklang.',
        'error'
      )
      return;
    }

    setRingLoader(true);
    try {
      // To'g'ridan-to'g'ri serverga yuborish
      const resp = await CreateEvent(title, details, file);

      if (resp.success) {
        setTitle("");
        setDetails("");
        setFile(null);
        // File input'ni tozalash
        const fileInput = document.getElementById('user_avatar');
        if (fileInput) fileInput.value = '';

        Swal.fire(
          'Muvaffaqiyatli!',
          'Tadbir yaratildi.',
          'success'
        )
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Xatolik!',
        error?.message || 'Tadbir yaratishda xatolik yuz berdi.',
        'error'
      )
    }
    setRingLoader(false);
  };


  return (<>
    {(authUser && authUser?.isAdmin) &&
      <div className="my-10 m-2">
        <h2 className="text-center text-4xl font-bold pb-10">Yangi Tadbir Yaratish</h2>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
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
              required
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
              required
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="user_avatar"
            >
              Tadbir rasmi
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              name="event"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,.jpg,.jpeg,.png,.gif,.webp"
              required
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              Tadbir uchun rasm yuklash majburiy
            </div>
          </div>
          {RingLoader ? <ColorRingLoader /> :
            <button
              type="submit"
              className="w-full bg-blue-700 py-4 rounded-lg text-white hover:bg-blue-800"
            >
              Tadbirni Yaratish
            </button>
          }
        </form>
      </div>
    }
  </>);
};


export default Page;
