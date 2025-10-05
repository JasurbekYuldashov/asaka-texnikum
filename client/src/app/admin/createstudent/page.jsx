"use client";
import { CreateStudent } from "@/Helper/CreateStudent";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import ColorRingLoader from "@/components/Common/Others/ColorRingLoader";

const Page = () => {
  const [fullName, setFullName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [course, setCourse] = useState("1");
  const [achievement, setAchievement] = useState("");
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
        'Iltimos, talaba rasmini yuklang.',
        'error'
      )
      return;
    }

    setRingLoader(true);
    try {
      // To'g'ridan-to'g'ri serverga yuborish
      const resp = await CreateStudent(fullName, specialty, course, achievement, file);

      if (resp.success) {
        setFullName("");
        setSpecialty("");
        setCourse("1");
        setAchievement("");
        setFile(null);
        // File input'ni tozalash
        const fileInput = document.getElementById('student_photo');
        if (fileInput) fileInput.value = '';

        Swal.fire(
          'Muvaffaqiyatli!',
          'Talaba qo\'shildi.',
          'success'
        )
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Xatolik!',
        error?.message || 'Talaba qo\'shishda xatolik yuz berdi.',
        'error'
      )
    }
    setRingLoader(false);
  };

  return (<>
    {(authUser && authUser?.isAdmin) &&
      <div className="my-10 m-2">
        <h2 className="text-center text-4xl font-bold pb-10">Talaba Qo'shish</h2>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              To'liq Ismi
            </label>
            <input
              type="text"
              id="fullName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Talaba ismini kiriting..."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="specialty"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mutaxassisligi
            </label>
            <input
              type="text"
              id="specialty"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mutaxassisligini kiriting..."
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="course"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Kursi
            </label>
            <select
              id="course"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="1">1-kurs</option>
              <option value="2">2-kurs</option>
              <option value="3">3-kurs</option>
              <option value="4">4-kurs</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="achievement"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Yutuqlari
            </label>
            <textarea
              id="achievement"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Talaba yutuqlari haqida ma'lumot kiriting..."
              value={achievement}
              onChange={(e) => setAchievement(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="student_photo"
            >
              Talaba rasmi
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="student_photo_help"
              id="student_photo"
              name="student"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,.jpg,.jpeg,.png,.gif,.webp"
              required
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="student_photo_help"
            >
              Talaba uchun rasm yuklash majburiy
            </div>
          </div>

          {RingLoader ? <ColorRingLoader /> :
            <button
              type="submit"
              className="w-full bg-blue-700 py-4 rounded-lg text-white hover:bg-blue-800"
            >
              Talabani Qo'shish
            </button>
          }
        </form>
      </div>
    }
  </>);
};

export default Page;
