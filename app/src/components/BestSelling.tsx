import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image"

const BestSelling = () => {
	return (
		<div>
			<div className='mb-5'>
				<h2 className='text-2xl font-medium'>Best Selling</h2>
			</div>
			<div className='flex w-[100%] h-[50%] justify-center mb-6'>
				<div className='sales h-[100%] w-[50%] mr-3'>
					<Card className=''>
						<CardHeader>
							<CardTitle className='text-2xl'>Breakfast</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src='/coffee.jpg'
								alt='Breakfast'
								width={500} // Provide a fixed width
								height={300} // Provide a fixed height
								className='w-full h-28'
								priority // You can add priority for above-the-fold images
							/>
						</CardContent>
						<CardFooter className='dark:text-gray-400'>
							<p>Coffee (200)</p>
						</CardFooter>
					</Card>
				</div>
				<div className='sales2 h-[100%] w-[50%] ml-3'>
					<Card className=''>
						<CardHeader>
							<CardTitle className='text-2xl'>Lunch</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src='/chipsandchicken.jpg'
								alt='Lunch'
								width={500}
								height={300}
								className='w-full h-28'
							/>
						</CardContent>
						<CardFooter className='dark:text-gray-400'>
							<p>items</p>
						</CardFooter>
					</Card>
				</div>
			</div>
			<div className='flex w-[100%] h-[50%] justify-center'>
				<div className='sales h-[100%] w-[50%] mr-3'>
					<Card className=''>
						<CardHeader>
							<CardTitle className='text-2xl'>Diner</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src='/riceandbeef.jpg'
								alt='Diner'
								width={500}
								height={300}
								className='w-full h-auto'
							/>
						</CardContent>
						<CardFooter className='dark:text-gray-400'>
							<p>items</p>
						</CardFooter>
					</Card>
				</div>
				<div className='sales2 h-[100%] w-[50%] ml-3'>
					<Card className=''>
						<CardHeader>
							<CardTitle className='text-2xl'>Dessert</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src='/milkshake.jpg'
								alt='Dessert'
								width={500}
								height={300}
								className='w-full h-auto'
							/>
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

export default BestSelling;
