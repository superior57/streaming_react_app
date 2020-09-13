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
                   function TablesDoc(props) {
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
                       <Typography variant="h6">Table</Typography>
                    </div>
                    <Button 
                        className="normal-case"
                        variant="contained" 
                        component="a" 
                        href="https://material-ui.com/components/tables" 
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
                     <Typography className="text-44 mt-32 mb-8" component="h1">Table</Typography>
<Typography className="description">Tables display sets of data. They can be fully customized.</Typography>

<Typography className="mb-16" component="div"><a href="https://material.io/design/components/data-tables.html">Tables</a> display information in a way that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.</Typography>
<Typography className="mb-16" component="div">Tables can include:</Typography>
<ul>
<li>A corresponding visualization</li>
<li>Navigation</li>
<li>Tools to query and manipulate data</li>
</ul>
<Typography className="mb-16" component="div">When including tools, they should be placed directly above or below the table.</Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Structure</Typography>
<Typography className="mb-16" component="div">A data table contains a header row at the top that lists column names, followed by rows for data.</Typography>
<Typography className="mb-16" component="div">Checkboxes should accompany each row if the user needs to select or manipulate data.</Typography>
<Typography className="mb-16" component="div">For accessibility, the first column is set to be a <code>{`<th>`}</code> element, with a <code>{`scope`}</code> of <code>{`"row"`}</code>. This enables screen readers to identify a cell&#39;s value by it&#39;s row and column name.</Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Simple Table</Typography>
<Typography className="mb-16" component="div">A simple example with no frills.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/SimpleTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/SimpleTable.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Dense Table</Typography>
<Typography className="mb-16" component="div">A simple example of a dense table with no frills.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/DenseTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/DenseTable.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Sorting &amp; Selecting</Typography>
<Typography className="mb-16" component="div">This example demonstrates the use of <code>{`Checkbox`}</code> and clickable rows for selection, with a custom <code>{`Toolbar`}</code>. It uses the <code>{`TableSortLabel`}</code> component to help style column headings.</Typography>
<Typography className="mb-16" component="div">The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table. (The <a href="#custom-table-pagination-action">&#39;Custom Table Pagination Action&#39; example</a> below shows the pagination within the TableFooter.)</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/EnhancedTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/EnhancedTable.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Customized tables</Typography>
<Typography className="mb-16" component="div">Here is an example of customizing the component. You can learn more about this in the
<a href="/customization/components/">overrides documentation page</a>.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/CustomizedTables.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/CustomizedTables.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Custom pagination options</Typography>
<Typography className="mb-16" component="div">It&#39;s possible to customise the options shown in the &quot;Rows per page&quot; select using the <code>{`rowsPerPageOptions`}</code> prop.
You should either provide an array of:</Typography>
<ul>
<li><Typography className="mb-16" component="div"><strong>numbers</strong>, each number will be used for the option&#39;s label and value.</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<TablePagination rowsPerPageOptions={[10, 50]} />
`}
</FuseHighlight>
</li>
<li><Typography className="mb-16" component="div"><strong>objects</strong>, the <code>{`value`}</code> and <code>{`label`}</code> keys will be used respectively for the value and label of the option (useful for language strings such as &#39;All&#39;).</Typography>

<FuseHighlight component="pre" className="language-jsx">
{` 
<TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
`}
</FuseHighlight>
</li>
</ul>
<Typography className="text-24 mt-32 mb-8" component="h3">Custom pagination actions</Typography>
<Typography className="mb-16" component="div">The <code>{`Action`}</code> property of the <code>{`TablePagination`}</code> component allows the implementation of
custom actions.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/CustomPaginationActionsTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/CustomPaginationActionsTable.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Fixed header</Typography>
<Typography className="mb-16" component="div">An example of a table with scrollable rows and fixed column headers.
It leverages the <code>{`stickyHeader`}</code> prop (⚠️ no IE 11 support).</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/StickyHeadTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/StickyHeadTable.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Spanning Table</Typography>
<Typography className="mb-16" component="div">A simple example with spanning rows &amp; columns.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/SpanningTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/SpanningTable.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Virtualized Table</Typography>
<Typography className="mb-16" component="div">In the following example, we demonstrate how to use <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a> with the <code>{`Table`}</code> component.
It renders 200 rows and can easily handle more.
Virtualization helps with performance issues.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/ReactVirtualizedTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/ReactVirtualizedTable.js')}
                    /></Typography>
<Typography className="text-32 mt-32 mb-8" component="h2">Complementary projects</Typography>
<Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">material-table</Typography>
<Typography className="mb-16" component="div"> src="https://img.shields.io/github/stars/mbrn/material-table.svg?style=social&label=Stars" alt="stars/>
 src="https://img.shields.io/npm/dm/material-table.svg" alt="npm downloads/></Typography>
<Typography className="mb-16" component="div"><a href="https://github.com/mbrn/material-table">material-table</a> is a simple and powerful Datatable for React based on Material-UI Table with some additional features.
They support many different use cases (editable, filtering, grouping, sorting, selection, i18n, tree data and more). You should check it out.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/MaterialTableDemo.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/MaterialTableDemo.js')}
                    /></Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Other</Typography>
<ul>
<li><a href="https://devexpress.github.io/devextreme-reactive/react/grid/">dx-react-grid-material-ui</a>: A data grid for Material-UI with paging, sorting, filtering, grouping and editing features (<a href="https://js.devexpress.com/licensing/">paid license</a>).</li>
<li><a href="https://github.com/gregnb/mui-datatables">mui-datatables</a>: Responsive data tables for Material-UI with filtering, sorting, search and more.</li>
<li><a href="https://github.com/unosquare/tubular-react">tubular-react</a>: A Material-UI table with local or remote data-source. Featuring filtering, sorting, free-text search, export to CSV locally, and aggregations.</li>
</ul>
<Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
<Typography className="mb-16" component="div">(WAI tutorial: <a href="https://www.w3.org/WAI/tutorials/tables/">https://www.w3.org/WAI/tutorials/tables/</a>)</Typography>
<Typography className="text-24 mt-32 mb-8" component="h3">Caption</Typography>
<Typography className="mb-16" component="div">A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it’s about and decide if they want to read it.</Typography>
<Typography className="mb-16" component="div"><FuseExample
                    className="my-24"
                    iframe={false}
                    component={require('app/main/documentation/material-ui-components/components/tables/AcccessibleTable.js').default} 
                    raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tables/AcccessibleTable.js')}
                    /></Typography>

                </div>
            }
        />
    
                     );
                   }
                   
                   export default TablesDoc;
                   