import React from 'react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const AnalyticsCard = () => {
  return (
    <div>
        <div className='flex w-[100%] h-[50%] justify-center mb-6'>
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
  )
}

export default AnalyticsCard;