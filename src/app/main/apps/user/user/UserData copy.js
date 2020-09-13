import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const LabelTitle = withStyles({
	root: {
		color: "#0098F4",
		marginTop: 10,
		marginBottom: -10,
		textAlign: 'left'
	}
})(Typography);

const useStyles = makeStyles(theme => ({
	productImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: orange[400],
		opacity: 0
	},
	productImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	productImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $productImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $productImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $productImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));

function UserData(props) {

	const { form, handleChange, setForm } = useForm(null);
	const classes = useStyles(props);
	const user = props.user;

	function handleUploadChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.readAsBinaryString(file);

		reader.onload = () => {
			setForm(
				_.set({ ...form }, `images`, [
					{
						id: FuseUtils.generateGUID(),
						url: `data:${file.type};base64,${btoa(reader.result)}`,
						type: 'image'
					},
					...form.images
				])
			);
		};

		reader.onerror = () => {
			console.log('error on load image');
		};
	}

	return (
		user && (
			<>
			<Grid container xs={4}>
				<label
					htmlFor="button-file"
					className={clsx(
						classes.productImageUpload,
						'flex items-center justify-center relative rounded-12 m-16 overflow-hidden cursor-pointer hover:shadow-5 w-full h-auto bg-blue-50'
					)}
				>
					<input
						accept="image/*"
						className="hidden"
						id="button-file"
						type="file"
						onChange={handleUploadChange}
					/>
					<Icon fontSize="large" color="action">
						cloud_upload
					</Icon>
				</label>
			</Grid>
			<Grid container xs={8} className="p-8">
				<Grid container itme xs={5}>
					<FormControl>
						<LabelTitle variant="caption">
							CPF
						</LabelTitle>
						<Typography variant="caption" fontSize={20}>
							{user.data.cpf}
						</Typography>
					</FormControl>
					<FormControl>
						<LabelTitle variant="caption">
							Nome Completo
						</LabelTitle>
						<Typography variant="caption">
							{user.data.displayName}
						</Typography>
					</FormControl>
				</Grid>
				<Grid container item xs={5}>
					
				</Grid>
			</Grid>
			<Grid container xs={12} className="justify-center mt-32">
				<div>
					<Button
						variant="contained"
						color="primary"
						className="w-96 mx-auto mt-16 mr-10"
						aria-label="salvar"
						// disabled={!isFormValid()}
						type="submit"
						style={{
							'background': 'linear-gradient(180deg, #0098F4 0%, #0678BD 56.94%)'
						}}
					>
						salvar
					</Button>
					<Button
						variant="contained"
						color="primary"
						className="w-96 mx-auto mt-16 ml-10"
						aria-label="Cancelar"
						// disabled={!isFormValid()}
						type="button"
						style={{
							'background': 'linear-gradient(180deg, #0098F4 0%, #0678BD 56.94%)'
						}}
						disabled
					>
						Cancelar
					</Button>
				</div>
			</Grid>
		</>
		)
	);
}

export default UserData;
