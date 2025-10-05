"use client"
import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard'
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';
import FetchStudentsData from '@/Helper/FetchStudentsData';
import ParagraphSkeletonLoader from '../Common/SkeletonLoader/ParagraphSkeletonLoader';

export default function StudentCardSection({ HorizontalScroll = true, limit = null }) {

	const [StudentsData, setStudentsData] = useState(null);
	const [Loader, setLoader] = useState(false);

	const fetchData = async () => {
		setLoader(true);
		try {
			const res = await FetchStudentsData();
			if (res.success) {
				const data = res.data.reverse();
				// Apply limit if specified
				setStudentsData(limit ? data.slice(0, limit) : data);
			}
		} catch (error) {
			console.error(error);
		}
		setLoader(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<section className="text-gray-600 body-font mb-12">
				<AnimatedElement>
					<h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| TALABALAR : </span></h1>
				</AnimatedElement>
				{Loader && <ParagraphSkeletonLoader />}

				<div className={`lg:px-2 py-4 mx-auto ${HorizontalScroll ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
					{StudentsData &&
						<div className={`flex justify-center ${HorizontalScroll ? "w-fit flex-row" : "flex-wrap"}`}>
							{StudentsData.map((data, index) => (
								<div key={index} className={`p-2 my-4 mx-2 md:w-96 ${HorizontalScroll ? "w-96" : "w-full"}`}>
									<StudentCard data={data} />
								</div>
							))}
						</div>
					}
				</div>
			</section>
		</>
	)
}
