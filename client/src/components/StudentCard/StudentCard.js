"use client"
import Link from "next/link";
import React, { useState } from "react";
import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import { useAuth } from "@/context/auth";
import ThreeDot from "./ThreeDot";

export default function StudentCard({ data }) {
	const [ReadMore, setReadMore] = useState(false);
	const { authUser, IsLoading, setAuthUser } = useAuth();

	// Rasm URL'ni to'g'rilash - Next.js proxy orqali
	const getImageUrl = (url) => {
		if (!url) return '/placeholder.jpg';
		if (url.startsWith('http')) return url;
		return url; // Next.js rewrites avtomatik proxy qiladi
	};

	return (
		<>
			{/* Card  */}
			<AnimatedElement>
				<div className="rounded-lg min-h-96">
					<img className="md:h-48 h-40 w-full rounded-lg object-cover object-center" src={getImageUrl(data.photoURL)} alt={data.fullName} />
					<div className="p-2">
						<h1 className="title-font text-lg font-bold text-gray-900 mb-2">{data.fullName}</h1>
						<p className="text-sm text-gray-600 mb-1">
							<span className="font-semibold">Mutaxassislik:</span> {data.specialty}
						</p>
						<p className="text-sm text-gray-600 mb-3">
							<span className="font-semibold">Kursi:</span> {data.course}-kurs
						</p>
						<p className="leading-relaxed text-sm sm:text-lg mb-3 text-gray-700">
							<span className="font-semibold">Yutuqlari:</span>{" "}
							{ReadMore ? data.achievement
								: <>
									{data.achievement.substring(0, 100)} {data.achievement.length > 100 && "..."}
								</>
							}
						</p>
						<div className="flex justify-between">
							{data.achievement.length > 100 &&
								<div className="flex items-center flex-wrap ">
									<button onClick={() => setReadMore(prev => !prev)} className="text-indigo-800 font-bold inline-flex items-center md:mb-2 lg:mb-0">{ReadMore ? "Kamroq ko'rish" : "Ko'proq ko'rish..."}
									</button>
								</div>
							}
							<ThreeDot id={data._id} />
						</div>
					</div>
				</div>
			</AnimatedElement>
		</>
	)
}
