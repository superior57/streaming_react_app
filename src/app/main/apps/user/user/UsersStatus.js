import _ from '@lodash';
import clsx from 'clsx';
import React from 'react';

export const userStatuses = [
	{
		id: 1,
		name: 'ativo',
		color: 'bg-blue text-white'
	},
	{
		id: 2,
		name: 'Payment accepted',
		color: 'bg-green text-white'
	},
	{
		id: 3,
		name: 'Preparing the order',
		color: 'bg-orange text-black'
	},
	{
		id: 4,
		name: 'Shipped',
		color: 'bg-purple text-white'
	},
	{
		id: 5,
		name: 'Delivered',
		color: 'bg-green-700 text-white'
	},
	{
		id: 6,
		name: 'Canceled',
		color: 'bg-pink text-white'
	},
	{
		id: 7,
		name: 'Refunded',
		color: 'bg-red text-white'
	},
	{
		id: 8,
		name: 'Payment error',
		color: 'bg-red-700 text-white'
	},
	{
		id: 9,
		name: 'On pre-order (paid)',
		color: 'bg-purple-300 text-white'
	},
	{
		id: 10,
		name: 'Awaiting bank wire payment',
		color: 'bg-blue text-white'
	},
	{
		id: 11,
		name: 'Awaiting PayPal payment',
		color: 'bg-blue-700 text-white'
	},
	{
		id: 12,
		name: 'Remote payment accepted',
		color: 'bg-green-800 text-white'
	},
	{
		id: 13,
		name: 'On pre-order (not paid)',
		color: 'bg-purple-700 text-white'
	},
	{
		id: 14,
		name: 'Awaiting Cash-on-delivery payment',
		color: 'bg-blue-800 text-white'
	}
];

function UsersStatus(props) {
	return (
		<div className={clsx('inline text-12 p-4 rounded truncate', _.find(userStatuses, { name: props.name }).color)}>
			{props.name}
		</div>
	);
}

export default UsersStatus;
