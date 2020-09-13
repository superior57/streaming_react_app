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
                   function BadgesDoc(props) {
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
                       <Typography variant="h6">Badge</Typography>
                    </div>
                    <Button 
                        className="normal-case"
                        variant="contained" 
                        component="a" 
                        href="https://material-ui.com/components/badges" 
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
                     <Typography className="text-44 mt-32 mb-8" component="h1">Badge</Typography>
<Typography className="description">Badge generates a small badge to the top-right of its child(ren).</Typography>

<Typography className="text-32 mt-32 mb-8" component="h2">Basic badges</Typography>
<Typography className="mb-16" component="div">Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/SimpleBadge.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/SimpleBadge.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Customized badges</Typography>
<Typography className="mb-16" component="div">Here is an example of customizing the component. You can learn more about this in the <a href="/customization/components/">overrides documentation page</a>.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/CustomizedBadges.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/CustomizedBadges.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Badge visibility</Typography>
<Typography className="mb-16" component="div">The visibility of badges can be controlled using the <code>{`invisible`}</code> property.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/BadgeVisibility.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeVisibility.js')}
                    /></Typography>
<Typography className="mb-16" component="div">The badge auto hides with badgeContent is zero. You can override this with the <code>{`showZero`}</code> property.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/ShowZeroBadge.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/ShowZeroBadge.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Maximum value</Typography>
<Typography className="mb-16" component="div">You can use the <code>{`max`}</code> property to cap the value of the badge content.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/BadgeMax.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeMax.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Dot badge</Typography>
<Typography className="mb-16" component="div">The <code>{`dot`}</code> property changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/DotBadge.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/DotBadge.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Badge overlap</Typography>
<Typography className="mb-16" component="div">You can use the <code>{`overlap`}</code> property to place the badge relative to the corner of the wrapped element.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/BadgeOverlap.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeOverlap.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Badge alignment</Typography>
<Typography className="mb-16" component="div">You can use the <code>{`anchorOrigin`}</code> prop to move the badge to any corner of the wrapped element.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/badges/BadgeAlignment.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeAlignment.js')}
                    /></Typography>

                </div>
            }
        />
    
                     );
                   }
                   
                   export default BadgesDoc;
                   