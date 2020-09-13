import _ from '@lodash';
import { orange } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
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

function ClubAddress(props) {

    const classes = useStyles();

	return (
		<>
            <Grid xs={12}>
                <Typography className="text-16 sm:text-16 truncate">
                    Endereço
                </Typography>
				<form
					noValidate
					className="flex flex-col w-full"
				>
					<div className="flex">
						<Grid item xs={4} className="pr-10">
                            <TextField
                                className="mb-2"
                                label="CEP"
                                autoFocus
                                type="text"
                                name="cep"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
						<Grid item xs={7} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="Logradouro"
                                autoFocus
                                type="text"
                                name="public_place"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
                        <Grid item xs={1} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="Nº"
                                autoFocus
                                type="text"
                                name="n_degrees"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
					</div>
                    <div className="flex">
						<Grid item xs={6} className="pr-10">
                            <TextField
                                className="mb-2"
                                label="Complemento"
                                autoFocus
                                type="text"
                                name="complement"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
						<Grid item xs={6} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="Bairro"
                                autoFocus
                                type="text"
                                name="neighborhood"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
					</div>
                    <div className="flex">
						<Grid item xs={4} className="pr-10">
                            <TextField
                                className="mb-2"
                                label="País"
                                autoFocus
                                type="text"
                                name="country"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
						<Grid item xs={4} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="Estado"
                                autoFocus
                                type="text"
                                name="state"
                                // onChange={handleChange}
                                fullWidth
                             />
						</Grid>
                        <Grid item xs={4} className="pl-10">
                            <TextField
                                className="mb-2"
                                label="Cidade"
                                autoFocus
                                type="text"
                                name="city"
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

export default ClubAddress;
