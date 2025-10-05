"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/navigation';
import FetchStudentDataByIdFunc from "@/Helper/FetchStudentDataByIdFunc";
import ParagraphSkeletonLoader from "@/components/Common/SkeletonLoader/ParagraphSkeletonLoader";
import { UpdateStudent } from "@/Helper/UpdateStudent";
import ColorRingLoader from "@/components/Common/Others/ColorRingLoader";
import Swal from 'sweetalert2';

export default function page({ params }) {
  const { studentid } = params;
  const { authUser, IsLoading, setAuthUser } = useAuth();
  const [PageLoader, setPageLoader] = useState(false);
  const [RingLoader, setRingLoader] = useState(false);

  const [photoURL, setPhotoURL] = useState("");
  const [fullName, setFullName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [course, setCourse] = useState("1");
  const [achievement, setAchievement] = useState("");

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

  const GetQueryStudentData = async () => {
    setPageLoader(true);
    try {
      const res = await FetchStudentDataByIdFunc(studentid);
      if (res.success) {
        const QueryStudentData = res.data;
        setPhotoURL(QueryStudentData.photoURL);
        setFullName(QueryStudentData.fullName);
        setSpecialty(QueryStudentData.specialty);
        setCourse(QueryStudentData.course.toString());
        setAchievement(QueryStudentData.achievement);
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
    GetQueryStudentData();
  }, [authUser, IsLoading])

  const UpdateChange = async () => {
    setRingLoader(true);
    try {
      const res = await UpdateStudent(fullName, specialty, course, achievement, studentid);
      if (res.success) {
        Swal.fire(
          'Muvaffaqiyatli!',
          'Talaba ma\'lumotlari yangilandi.',
          'success'
        )
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        'Xatolik!',
        error?.message || 'Xatolik yuz berdi.',
        'error'
      )
    }
    setRingLoader(false);
  }

  // Rasm URL'ni to'g'rilash - Next.js proxy orqali
  const getImageUrl = (url) => {
    if (!url) return '/placeholder.jpg';
    if (url.startsWith('http')) return url;
    return url;
  };

  return (<>
    {PageLoader && <ParagraphSkeletonLoader />}
    {(authUser && authUser?.isAdmin) && !PageLoader &&
      <div className="my-10 m-2">
        <h2 className="text-center text-4xl font-bold pb-10">Talaba Ma'lumotlarini Tahrirlash</h2>
        <div className="max-w-sm mx-auto" >
          <div className="mb-5">
            <img className="md:h-48 h-40 w-full mb-2 rounded-lg object-cover object-center" src={getImageUrl(photoURL)} alt="Talaba rasmi" />
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
            ></textarea>
          </div>

          {RingLoader ? <ColorRingLoader /> :
            <button
              onClick={UpdateChange}
              className="w-full bg-blue-700 py-4 rounded-lg text-white hover:bg-blue-800"
            >
              Ma'lumotlarni Yangilash
            </button>
          }
        </div>
      </div>
    }
  </>);
};
