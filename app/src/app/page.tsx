import React from "react";
import { ModeToggle } from "../components/ui/ModeToggle";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { LinearChart } from "../components/LinearChart"
const page = () => {
	return (
		<div>
			<div className='flex columns-2 w-[100%] overflow-hidden'>
				<div className='left hidden w-[40%] h-[100vh] text-center border dark:border-white p-3'>
					<div className='header'>
						<div className='section title w-[100%] h-[30px] border dark:border-white'></div>
					</div>
					<hr className='my-10' />
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
					<div className='w-[100%] h-[30px] border dark:border-white mb-5'></div>
				</div>
				<div className='right w-[100%] h-[100vh] p-3 overflow-y-scroll'>
					{/* mainsectionheader needs to be a component so that it can be reused by other pages */}
					<div className='mainsectionheader flex'>
						<div className='header h-[30px] w-[80%] '>
							<h1 className='text-2xl'>Phwanya Yanga</h1>
						</div>
						<div className='tools text-right h-[30px] w-[20%]'>
							<ModeToggle />
						</div>
					</div>
					<div className='first w-[100%]  h-[500px] mt-10 text-white'>
						<div className='flex w-[100%] h-[50%] justify-center'>
							<div className='sales h-[100%] w-[50%] mr-3'>
								<Card className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-600 via-orange-400 to-orange-200'>
									<CardHeader>
										<CardTitle className='text-2xl text-white'>
											Products <br /> Sold
										</CardTitle>
									</CardHeader>
									<CardContent>
										<h2 className='text-3xl text-white'>
											<b>1000</b>
										</h2>
									</CardContent>
									<CardFooter>
										<p>increased by 2.25%</p>
									</CardFooter>
								</Card>
							</div>
							<div className='sales2 h-[100%] w-[50%] ml-3 text-white'>
								<Card className='bg-gradient-to-b from-purple-400 via-violet-500 to-indigo-600'>
									<CardHeader>
										<CardTitle className='text-2xl text-white'>
											Total <br />
											Sales
										</CardTitle>
									</CardHeader>
									<CardContent>
										<h2 className='text-3xl text-white'>
											<b>1000</b>
										</h2>
									</CardContent>
									<CardFooter>
										<p>increased by 2.25%</p>
									</CardFooter>
								</Card>
							</div>
						</div>
						<div className='flex w-[100%] h-[50%] justify-center'>
							<div className='sales h-[100%] w-[50%] mr-3'>
								<Card className='bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700'>
									<CardHeader>
										<CardTitle className='text-2xl text-white'>
											Total <br/>Revenue
										</CardTitle>
									</CardHeader>
									<CardContent>
										<h2 className='text-3xl text-white'>
											<b>1000</b>
										</h2>
									</CardContent>
									<CardFooter>
										<p>increased by 2.25%</p>
									</CardFooter>
								</Card>
							</div>
							<div className='sales2 h-[100%] w-[50%] ml-3'>
								<Card className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-600 via-fuchsia-400 to-fuchsia-200'>
									<CardHeader>
										<CardTitle className='text-2xl text-white'>
											Total <br /> Users
										</CardTitle>
									</CardHeader>
									<CardContent>
										<h2 className='text-3xl text-white'>
											<b>1000</b>
										</h2>
									</CardContent>
									<CardFooter>
										<p>increased by 2.25%</p>
									</CardFooter>
								</Card>
							</div>
						</div>
					</div>
					<div className='second h-[400px] w-[100%] mt-10'>
						<div className='chart border border-white w-[100%] h-[100%]'>
							<LinearChart />
						</div>
					</div>
					<div className='third h-[120px] w-[100%] flex mt-10'>
						<div className='  h-[100%] w-[25%] '></div>
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
