import _ from '@lodash';
import { orange } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
    width: '100%',
    },
    button: {
    marginRight: theme.spacing(1),
    },
}));

function ClubDice(props) {

	const classes = useStyles();

	return (
		<>
			<Grid xs={12}>
                <Typography className="text-16 sm:text-16 truncate">
                    Clube
                </Typography>
				<form
					noValidate
					className="flex flex-col w-full"
				>
                    <div className="flex">
						<Grid item xs={5} className="pr-10">
                            <TextField
                                className="mb-2"
                                label="CPF"
                                autoFocus
                                type="text"
                                name="cpf"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
						<Grid item xs={7} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="Nome"
                                autoFocus
                                type="text"
                                name="name"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
					</div>

                    <div className="flex">
						<Grid item xs={4} className="pr-10">
                            <TextField
                                className="mb-2"
                                label="Nascimento"
                                autoFocus
                                type="text"
                                name="birth"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
						<Grid item xs={4} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="Nacionalidade"
                                autoFocus
                                type="text"
                                name="nationality"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
                        <Grid item xs={4} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="RG"
                                autoFocus
                                type="text"
                                name="rg"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
					</div>
                    
				</form>
			</Grid>
		</>
	);
}

export default ClubDice;
