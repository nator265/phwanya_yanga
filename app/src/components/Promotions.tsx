import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Promotions = () => {
    return (
			<div>
				<div className='mb-5'>
					<h2 className='text-2xl font-medium'>Promotions</h2>
				</div>
				<div className='flex w-[100%] h-[50%] justify-center mb-6'>
					<div className='sales h-[100%] w-[100%]'>
						<Card className=''>
							<CardHeader>
								<CardTitle className='text-2xl'>Breakfast</CardTitle>
							</CardHeader>
							<CardContent>
								<h2 className='text-3xl'>
									<b>1000</b>
								</h2>
							</CardContent>
							<CardFooter className='dark:text-gray-400'>
								<p>items</p>
							</CardFooter>
						</Card>
					</div>
				</div>
				<div className='flex w-[100%] h-[50%] justify-center mb-6'>
					<div className='sales2 h-[100%] w-[100%]'>
						<Card className=''>
							<CardHeader>
								<CardTitle className='text-2xl'>Lunch</CardTitle>
							</CardHeader>
							<CardContent>
								<h2 className='text-3xl'>
									<b>1000</b>
								</h2>
							</CardContent>
							<CardFooter className='dark:text-gray-400'>
								<p>items</p>
							</CardFooter>
						</Card>
					</div>
				</div>
				<div className='flex w-[100%] h-[50%] justify-center'>
					<div className='sales h-[100%] w-[100%]'>
						<Card className=''>
							<CardHeader>
								<CardTitle className='text-2xl'>Diner</CardTitle>
							</CardHeader>
							<CardContent>
								<h2 className='text-3xl'>
									<b>1000</b>
								</h2>
							</CardContent>
							<CardFooter className='dark:text-gray-400'>
								<p>items</p>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		);
};

export default Promotions;
