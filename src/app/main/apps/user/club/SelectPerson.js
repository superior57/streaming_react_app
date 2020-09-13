import _ from '@lodash';
import { orange } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    root: {
    width: '100%',
    },
    button: {
    marginRight: theme.spacing(1),
    },
}));

function SelectPerson(props) {

    const classes = useStyles();

	return (
		<>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel value="physical" control={<Radio style={{"color":"#0098F4"}} />} label="Pessoa Física" className="mr-48"/>
                    <FormControlLabel value="legal" control={<Radio style={{"color":"#0098F4"}} />} label="Pessoa Júridica" className="ml-4"/>
                </RadioGroup>
            </FormControl>
		</>
	);
}

export default SelectPerson;
