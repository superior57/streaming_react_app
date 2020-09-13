import { TextFieldFormsy } from '@fuse/core/formsy';
import {useForm} from '@fuse/hooks';
import {Button, InputAdornment, FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
import {Person, Lock} from '@material-ui/icons';
import * as authActions from 'app/auth/store/actions';
import Formsy from 'formsy-react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CJWTLoginTab(props) {
	const dispatch = useDispatch();
	const login = useSelector(({ auth }) => auth.login);

	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	const { form, handleChange, resetForm } = useForm({
		email: '',
		password: '',
		remember: true
	});

	useEffect(() => {
		if (login.error && (login.error.email || login.error.password)) {
			formRef.current.updateInputsWithError({
				...login.error
			});
			disableButton();
		}
	}, [login.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	function handleSubmit(model) {
		dispatch(authActions.submitLogin(model));
	}

	return (
		<div className="w-full">
			<Formsy
				onValidSubmit={handleSubmit}
				onValid={enableButton}
				onInvalid={disableButton}
				ref={formRef}
				className="flex flex-col justify-center w-full"
			>
				<TextFieldFormsy
					className="mb-16"
					type="text"
					name="email"
					placeholder="Usuário"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Person/> 
							</InputAdornment>
						)
					}}
					required
				/>
				

				<TextFieldFormsy
					className="mb-16"
					type="password"
					name="password"
					placeholder="Senha"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Lock /> 
							</InputAdornment>
						)
					}}
					required
				/>

				<div className="flex items-center justify-between">
					<Link className="font-medium" to="/forgot-password" 
						style={{
							color: '#fff'
						}}
					>
						Recuperar senha
					</Link>
					<FormControl>
						<FormControlLabel
							control={
								<Checkbox
									name="remember"
									checked={form.remember}
									onChange={handleChange}
								/>
							}
							label="Lembrar Senha"
							className="-mr-2"
						/>
					</FormControl>					
				</div>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16 normal-case uppercase"
					aria-label="LOG IN"
					disabled={!isFormValid}
					value="legacy"
					style={{
						'background': 'linear-gradient(180deg, #066CB8 0%, #153657 100%), #61AEE9',
						textTransform: 'upperCase'
					}}
				>
					Login
				</Button>
			</Formsy>
		</div>
	);
}

export default CJWTLoginTab;
