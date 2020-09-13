import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Bar } from 'react-chartjs-2';

function Widget4(props) {
	const theme = useTheme();

	return (
		<Card className="w-full rounded-8 shadow-none border-1">
			<div className="p-16 pb-0 flex flex-row flex-wrap items-end">
				<div className="">
					<Typography className="h3" color="textSecondary">
						Visits
					</Typography>
					<Typography className="text-56 font-300 leading-none mt-8">{props.data.visits.value}</Typography>
				</div>

				<div className="py-4 text-16 flex flex-row items-center">
					<div className="flex flex-row items-center">
						{props.data.visits.ofTarget > 0 && <Icon className="text-green">trending_up</Icon>}
						{props.data.visits.ofTarget < 0 && <Icon className="text-red">trending_down</Icon>}
						<Typography className="mx-4">{props.data.visits.ofTarget}%</Typography>
					</div>
					<Typography className="whitespace-no-wrap">of target</Typography>
				</div>
			</div>

			<div className="h-96 w-100-p">
				<Bar
					data={{
						labels: props.data.labels,
						datasets: props.data.datasets.map(obj => ({
							...obj,
							borderColor: theme.palette.error.main,
							backgroundColor: theme.palette.error.main
						}))
					}}
					options={props.data.options}
				/>
			</div>
		</Card>
	);
}

export default React.memo(Widget4);
