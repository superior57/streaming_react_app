import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import * as authActions from 'app/auth/store/actions';
import Formsy from 'formsy-react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function JWTLoginTab(props) {
	const dispatch = useDispatch();
	const login = useSelector(({ auth }) => auth.login);

	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

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
					label="Username/Email"
					value="admin"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									email
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="password"
					name="password"
					label="Password"
					value="admin"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									vpn_key
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16 normal-case"
					aria-label="LOG IN"
					disabled={!isFormValid}
					value="legacy"
				>
					Login
				</Button>
			</Formsy>

			<div className="flex flex-col items-center pt-24">
				<Typography className="text-14 font-600 py-8">Credentials</Typography>

				<Divider className="mb-16 w-256" />

				<table className="text-left w-256">
					<thead>
						<tr>
							<th>
								<Typography className="font-600" color="textSecondary">
									Role
								</Typography>
							</th>
							<th>
								<Typography className="font-600" color="textSecondary">
									Username
								</Typography>
							</th>
							<th>
								<Typography className="font-600" color="textSecondary">
									Password
								</Typography>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Typography>Admin</Typography>
							</td>
							<td>
								<Typography>admin</Typography>
							</td>
							<td>
								<Typography>admin</Typography>
							</td>
						</tr>
						<tr>
							<td>
								<Typography>Staff</Typography>
							</td>
							<td>
								<Typography>staff</Typography>
							</td>
							<td>
								<Typography>staff</Typography>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default JWTLoginTab;
