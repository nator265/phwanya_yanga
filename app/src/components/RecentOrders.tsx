import React from "react";

const RecentOrders = () => {
	return (
		<div>
			<div className='headerSection pb-5'>
				<h2 className='text-2xl font-medium'>Recent Orders</h2>
			</div>
			<div className='dataSection'>
				<table>
					<thead>
						<tr>
							<th>Customer</th>
							<th>Order</th>
							<th>Total</th>
							<th>Status</th>
							<th>Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>James</td>
							<td>chips and chicken</td>
							<td>MWk 7,000</td>
							<td>pending</td>
							<td>12 sept 2024</td>
							<td>actions</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentOrders;
