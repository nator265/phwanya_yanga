import React from "react";

const RecentOrders = () => {
	return (
		<div>
			<div className='headerSection pb-5'>
				<h2 className='text-2xl font-medium'>Recent Orders</h2>
			</div>
			<div className='dataSection'>
				<table className='w-[100%] justify-center'>
					<thead className='text-center w-[100%] align-center border border-white'>
						<tr>
							<th>Customer</th>
							<th>Order</th>
							<th>Total</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody className='text-center'>
						<tr className=''>
							<td>James</td>
							<td>chips and chicken</td>
							<td>MWK7,000</td>
							<td>pending</td>
						</tr>
						<tr className=''>
							<td>James</td>
							<td>chips and chicken</td>
							<td>MWK7,000</td>
							<td>pending</td>
						</tr>
						<tr className=''>
							<td>James</td>
							<td>chips and chicken</td>
							<td>MWK7,000</td>
							<td>pending</td>
						</tr>
						<tr className=''>
							<td>James</td>
							<td>chips and chicken</td>
							<td>MWK7,000</td>
							<td>pending</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentOrders;
