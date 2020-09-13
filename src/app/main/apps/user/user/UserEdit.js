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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function UserEdit(props) {

	const user = props.user;

	return (
		user && (
			<>
				<Grid container xs={12} className="h-full flex justify-center">
					{/* <Typography
						className="flex justify-center"
						component="p"
						style={{
							'font-size' : '17px',
							'margin' : 'auto'
						}}
					>
						Clique no campo que deseja editar. <br />
						Após clicar edite o campo nesta área e confirme.
					</Typography> */}
					
					<FormControl className="text-left flex w-full mx-24 mt-24">
						<InputLabel id="status_label">Status</InputLabel>
						<Select
						labelId="status_label"
						id="status"
						// onChange={handleChange}
						inputProps={{ readOnly: false }}
						defaultValue={0}
						>
							<MenuItem value={0}>Actviate</MenuItem>
							<MenuItem value={1}>Deactivate</MenuItem>
						</Select>
					</FormControl>
					
					<div
						style={{
							'display' : 'flex',
							'align-items' : 'center'
						}}
					>
						<Button
							variant="contained"
							color="primary"
							className="w-96 mr-10"
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
							className="w-96 ml-10"
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

export default UserEdit;
