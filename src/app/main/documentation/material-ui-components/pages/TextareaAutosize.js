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
                   function TextareaAutosizeDoc(props) {
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
                       <Typography variant="h6">Textarea Autosize</Typography>
                    </div>
                    <Button 
                        className="normal-case"
                        variant="contained" 
                        component="a" 
                        href="https://material-ui.com/components/textarea-autosize" 
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
                     <Typography className="text-44 mt-32 mb-8" component="h1">Textarea Autosize</Typography>
<Typography className="description">A textarea component for React which grows with content.</Typography>

<ul>
<li>📦 <a href="/size-snapshot">2.1 kB gzipped</a></li>
</ul>
<Typography className="mb-16" component="div">The <code>{`TextareaAutosize`}</code> component automatically adjust the textarea height on keyboard and window resize events.</Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Empty</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/textarea-autosize/EmptyTextarea.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/EmptyTextarea.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Minimum height</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/textarea-autosize/MinHeightTextarea.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/MinHeightTextarea.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Maximum height</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/textarea-autosize/MaxHeightTextarea.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/textarea-autosize/MaxHeightTextarea.js')}
                    /></Typography>

                </div>
            }
        />
    
                     );
                   }
                   
                   export default TextareaAutosizeDoc;
                   