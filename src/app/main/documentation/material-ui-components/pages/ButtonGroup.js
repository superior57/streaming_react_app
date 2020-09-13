import React from 'react';
                   import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import FusePageSimple from '@fuse/core/FusePageSimple';
                   import Button from '@material-ui/core/Button';
                   import Icon from '@material-ui/core/Icon';
                   import Typography from '@material-ui/core/Typography';
                   import {makeStyles} from '@material-ui/core/styles';
                   /* eslint import/no-webpack-loader-syntax: off */
                   /* eslint no-unused-vars: off */
                   /* eslint-disable jsx-a11y/accessible-emoji */
                   const useStyles = makeStyles(theme=>({
                       layoutRoot: {
                           '& .description':{
                                   marginBottom:16
                           }
                       }
                   }));
                   function ButtonGroupDoc(props) {
                     const classes = useStyles();
                     return (
                       
         <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                     <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Components</Typography>
                        </div>
                       <Typography variant="h6">Button group</Typography>
                    </div>
                    <Button 
                        className="normal-case"
                        variant="contained" 
                        component="a" 
                        href="https://material-ui.com/components/button-group" 
                        target="_blank"
                        role="button"
                        >
                        <Icon>link</Icon>
                        <span className="mx-4">Reference</span>
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                     <Typography className="text-44 mt-32 mb-8" component="h1">Button group</Typography>
<Typography className="description">The ButtonGroup component can be used to group related buttons.</Typography>

<Typography className="text-32 mt-32 mb-8" component="h2">Basic button group</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/button-group/BasicButtonGroup.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/BasicButtonGroup.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Group sizes and colors</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/button-group/GroupSizesColors.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/GroupSizesColors.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Group orientation</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/button-group/GroupOrientation.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/GroupOrientation.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Split Button</Typography>
<Typography className="mb-16" component="div">ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this example), or be used to immediately trigger a related action.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/button-group/SplitButton.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/button-group/SplitButton.js')}
                    /></Typography>

                </div>
            }
        />
    
                     );
                   }
                   
                   export default ButtonGroupDoc;
                   