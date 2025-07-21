
import React from "react";
import Link from "next/link";
import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import styles from "@/components/Common/Animation/AnimatedElement.module.css";

export default function DepartmentCard({ data }) {
	return (
		<>
			{/* Enhanced Department Card */}
			<AnimatedElement className={`${styles.card}`}>
				<div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
					{/* Image Container with Overlay */}
					<div className="relative overflow-hidden">
						<img
							className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-110"
							src={data.BannerPic}
							alt={data.ism || "Rahbar rasmi"}
						/>
						{/* Gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

						{/* Position badge */}
						<div className="absolute top-4 left-4">
							<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
								{data.Title}
							</span>
						</div>
					</div>

					{/* Content Section */}
					<div className="p-6 space-y-4">
						{/* Name with icon */}
						<div className="flex items-start space-x-3">
							<div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
								<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
								</svg>
							</div>
							<div className="flex-1 min-w-0">
								<h2 className="text-xl font-bold text-gray-900 leading-tight mb-1">
									{data.ism}
								</h2>
								<p className="text-sm text-blue-600 font-medium">
									{data.Title}
								</p>
							</div>
						</div>

						{/* Description */}
						<div className="bg-gray-50 rounded-lg p-4">
							<p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
								{data.Description}
							</p>
						</div>

						{/* Reception hours */}
						<div className="flex items-start space-x-3 bg-green-50 rounded-lg p-4">
							<div className="flex-shrink-0">
								<svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
								</svg>
							</div>
							<div className="flex-1">
								<h4 className="text-sm font-semibold text-green-800 mb-1">
									Qabul vaqti
								</h4>
								<p className="text-xs text-green-700 leading-relaxed">
									{data.qabul}
								</p>
							</div>
						</div>

						{/* Action buttons */}
						{/*<div className="flex space-x-3 pt-2">*/}
						{/*	<Link*/}
						{/*		href={data.PageLink || "#"}*/}
						{/*		className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"*/}
						{/*	>*/}
						{/*		Batafsil ma'lumot*/}
						{/*	</Link>*/}
						{/*	<button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">*/}
						{/*		<svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">*/}
						{/*			<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />*/}
						{/*		</svg>*/}
						{/*	</button>*/}
						{/*</div>*/}
					</div>
				</div>
			</AnimatedElement>
		</>
	)
}
