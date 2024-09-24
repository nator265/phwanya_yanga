import React from "react";
import { ModeToggle } from "../components/ui/ModeToggle";

const page = () => {
	return (
		<div>
			<div className='flex columns-2 w-[100%] overflow-hidden'>
				<div className='left w-[15%] h-[100vh] text-center border dark:border-white p-3'>
					<div className='header mb-'>
						<div className='section title w-[100%] h-[30px] border dark:border-white'></div>
					</div>
					<hr className='my-10' />
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
				</div>
				<div className='right w-[85%] h-[100vh] border dark:border-white p-3 overflow-y-scroll'>
					{/* mainsectionheader needs to be a component so that it can be reused by other pages */}
					<div className='mainsectionheader flex'>
						<div className='header h-[30px] w-[50%] '>
							<h1 className='text-2xl'>Phwanya Yanga</h1>
						</div>
						<div className='tools text-right h-[30px] w-[50%]'>
							<ModeToggle />
						</div>
					</div>
					<div className='first w-[100%] h-[150px] border dark:border-white flex mt-10'>
						<div className='sales border dark:border-white h-[100%] w-[50%]'></div>
						<div className='sales2 border dark:border-white h-[100%] w-[50%]'></div>
					</div>
					<div className='second h-[300px] w-[100%] mt-10'>
						<div className='chart border border-white w-[100%] h-[100%]'></div>
					</div>
					<div className='third h-[120px] w-[100%] flex mt-10'>
						<div className=' border dark:border-white h-[100%] w-[25%] '></div>
						<div className=' border dark:border-white h-[100%] w-[25%]  '></div>
						<div className=' border dark:border-white h-[100%] w-[25%]  '></div>
						<div className=' border dark:border-white h-[100%] w-[25%]  '></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
