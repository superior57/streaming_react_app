import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

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
	const [ textEditable, setTextEditable ] = useState({
		email: false,
		permission: false
	});
	const emailFocus = useRef(null);
	const permissionFocus = useRef(null);

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

	// function handleClick(item) {
	// 	console.log(item);
	// }

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
						type={user.data.photoURL ? "text" : 'file'}
						onChange={handleUploadChange}
					/>
					{
						user.data.photoURL ? (
							<img src={user.data.photoURL} alt="" className="w-full" />
						) : (
							<Icon fontSize="large" color="action">
								cloud_upload
							</Icon>
						)
					}
					
				</label>
			</Grid>
			<Grid container xs={8} className="mt-24 pl-8">
				<Grid container itme xs={7}>
				<form
					noValidate
					className="flex flex-col w-full"
				>
					<div className="flex" xs={10}>
						<TextField
							className="mb-2"
							label="CPF"
							name="cpf"
							defaultValue={user.data.cpf}
							InputProps={{
								readOnly: true,
							}}						
						/>
					</div>

					<div className="flex" xs={10}>
						<TextField
							className="mb-2"
							name="full_name"
							label="Nome Completo"
							defaultValue={user.data.displayName}
							InputProps={{
								readOnly: true,
							}}	
						/>
					</div>

					<div className="flex row">
						<TextField
							className="mb-2"
							label="E-mail"
							type="email"
							name="email"
							defaultValue={user.data.email}
							InputProps={{
								readOnly: !textEditable.email,
							}}
							inputRef={emailFocus}
						/>
						<IconButton
							onClick={event => {
								setTextEditable({email: true, permission: false});
								emailFocus.current.focus();
							}}
						>
							<CreateIcon/>
						</IconButton>
					</div>

					<div className="flex row">
						<TextField
							className="mb-2"
							label="Permissões"
							type="text"
							name="permission"
							defaultValue={user.role}
							InputProps={{
								readOnly: !textEditable.permission,
							}}	
							inputRef={permissionFocus}
						/>
						<IconButton
							onClick={event => {
								setTextEditable({email: false, permission: true});
								permissionFocus.current.focus();
							}}
						>
							<CreateIcon/>
						</IconButton>
					</div>

					<div className="flex row">
						<TextField
							className="mb-2"
							label="Status"
							type="text"
							name="status"
							defaultValue={user.status}
							InputProps={{
								readOnly: true,
							}}	
						/>
						<IconButton
							onClick={event => {

							}}
						>
							<CreateIcon/>
						</IconButton>
					</div>
					
				</form>
				</Grid>
				<Grid container item xs={5}>
					
				</Grid>
			</Grid>
			<Grid container xs={12} className="justify-center mt-32">
				{/* <div>
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
				</div> */}
			</Grid>
		</>
		)
	);
}

export default UserData;
