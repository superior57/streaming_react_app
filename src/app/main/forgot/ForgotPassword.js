import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import { TextFieldFormsy } from '@fuse/core/formsy';
import { InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import {Person} from '@material-ui/icons';

const DASHBOARD_LOGO_DARK = 'assets/images/logos/Dashboard-logo-header_dark.svg';

const useStyles = makeStyles(theme => ({
	root: {
		background: 'url("assets/images/backgrounds/msc_erp_back.svg")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		color: theme.palette.primary.contrastText
	}
}));

function ForgotPassword() {
	const classes = useStyles();
	const { form, handleChange, resetForm } = useForm({
		email: ''
	});

	function isFormValid() {
		return form.email.length > 0;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		resetForm();
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
						<CardContent className="flex flex-col items-center justify-center p-32 -mt-192">
							<div className="w-256 m-12">
								<img src={DASHBOARD_LOGO_DARK} alt="logo" />
							</div>

							<div className="flex" style={{
								width: 650
							}}>
							

							<form
								name="recoverForm"
								noValidate
								className="flex flex-col justify-center w-half text-center p-24"
								onSubmit={handleSubmit}
							>
								<Typography variant="h6" className="mb-12 text-17">
									Recuperar senha
								</Typography>
								<TextField
									className="mb-16"
									autoFocus
									type="email"
									name="email"
									placeholder="CPF"
									value={form.email}
									onChange={handleChange}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<Person/> 
											</InputAdornment>
										)
									}}
									required
									fullWidth
								/>

								<Button
									variant="contained"
									color="primary"
									className="w-full mx-auto mt-16"
									aria-label="Reset"
									disabled={!isFormValid()}
									type="submit"
									style={{
										'background': 'linear-gradient(180deg, #066CB8 0%, #153657 100%), #61AEE9',
										textTransform: 'upperCase'
									}}
								>
									RECUPERAR SENHA
								</Button>
							</form>		
							<div className="w-half m-24 pl-24"
								style={{
									borderLeft: 'solid 1px'
								}}
							>
								<Typography variant="h6" className="mb-12 text-17">
									Esqueceu a senha?
								</Typography>
								<Typography className="text-justify">
								Para recuperar sua senha, informe seu CPF e clique em “Recuperar senha”. Você receberá um e-mail automático contendo o link e as instruções para redefinir a senha.
								</Typography>	
							</div>						
							</div>


							{/* <div className="flex flex-col items-center justify-center pt-32 pb-24">
								<Link className="font-medium" to="/pages/auth/login">
									Go back to login
								</Link>
							</div> */}
						</CardContent>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default ForgotPassword;
