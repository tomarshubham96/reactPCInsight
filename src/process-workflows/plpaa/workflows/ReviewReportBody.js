import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    height: '100vh',
    width: '100%',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'table'
  },
  control: {
    padding: theme.spacing(0),
  },
}));

export default function ReviewReportBody() {;
  const classes = useStyles();
  
  return (
      <Grid container spacing={0} className={classes.control}>
        <Grid item  sm={2} >
          <Box className={classes.paper}>Review SideBar</Box>
        </Grid>
        <Grid item xs={6} sm={10}>
          <Paper className={classes.paper}>
          <Table> 
          
            <TableHead>       
              <TableRow>
                <TableCell ><strong>Affirmation Style Subtotal 1</strong></TableCell>
                <TableCell ><strong>Metrics F/F Profile Name Consolidated Attribution</strong></TableCell>            
                <TableCell ><strong>Daily Comprehensive P&L (USD) ABS Secondary Accounting</strong></TableCell>
                <TableCell ><strong>MTD Comprehensive P&L (USD) ABS Secondary Accounting</strong></TableCell>
              </TableRow>
            </TableHead> 

            <TableBody>
             <TableRow>
                <TableCell rowspan="3"><strong>Carry</strong></TableCell>
                <TableCell ><strong>Financing</strong></TableCell>            
                <TableCell align="right">(38,485)</TableCell>
                <TableCell align="right">(38,485)</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Interest</strong></TableCell>            
                <TableCell align="right" >224,865</TableCell>
                <TableCell align="right">224,865</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Total</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell rowspan="9"><strong>MTM P&L Explain(Ex Residual)</strong></TableCell>
                <TableCell ><strong>Credit Bond CDS Basis</strong></TableCell>            
                <TableCell align="right">20,319</TableCell>
                <TableCell align="right">20,319</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Credit Delta</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Credit Gamma & Higher Orders</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Credit Market Spread</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Credit QAS Drift</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Total</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Total</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Total</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
             <TableRow>
                <TableCell ><strong>Total</strong></TableCell>            
                <TableCell align="right">186,380</TableCell>
                <TableCell align="right">186,380</TableCell>          
             </TableRow>
            </TableBody>

          </Table>
          </Paper>
        </Grid>
      </Grid>
  );
}