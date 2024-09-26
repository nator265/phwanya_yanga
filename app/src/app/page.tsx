import React from "react";
import { ModeToggle } from "../components/ui/ModeToggle";
import { LinearChart } from "../components/LinearChart";
import AnalyticsCard from "../components/AnalyticsCard";
import RecentOrders from "../components/RecentOrders";
import { OrderStats } from "../components/OrderStats";
import MenuCards from "@/components/MenuCards";
import BestSelling from "../components/BestSelling"

const page = () => {
	return (
		<div className='dark:bg-[#000000] bg-[#fdfbfb]'>
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
					<div className='sales'>
						<div className='numbersCard w-[100%]  h-[520px] mt-10 text-white'>
							<AnalyticsCard />
						</div>
						<div className='chart h-[400px] w-[100%] mt-10'>
							<div className='chart w-[100%] h-[100%]'>
								<LinearChart />
							</div>
						</div>
					</div>
					<div className='bestSelling'>
						<div className='cards mt-12'>
							<BestSelling />
						</div>
					</div>
					<div className='orders mt-10'>
						<div className='recentOrders'>
							<RecentOrders />
						</div>
						<div className='ordersChart mt-10'>
							<OrderStats />
						</div>
					</div>
					<div className='menu'>
						<div className='cards mt-12'>
							<MenuCards />
						</div>
					</div>
					<div>
						{/* footer needs to be a component so that it can be reused by other pages */}
						<div className='footer mt-12'>
							<p className='text-center text-gray-600'>
								�� 2024 Phyanya Yanga. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
