import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CardContent from '@material-ui/core/CardContent';

import mockData from './MockData/SupervisorReviewDemoData';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  root: { padding: 0},
  content: {
    padding: 0,
    overflow: 'auto',
  },
  cardheader:{
    padding: 8,
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1,
    color: '#fff',
    backgroundImage: 'linear-gradient(to bottom, #93d2e4, #4392d6)'
  },
  tableCell:{
    padding: 10,
    paddingLeft: 10,
    textAlign: 'left'
  }
}));

const SupervisorReviewTile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [profiles] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader className={classes.cardheader}
        titleTypographyProps={{variant:'subtitle2'}}
        title="Supervisor Review"
      />
      <Divider />
      <CardContent className={classes.content}>

          <div>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>Profile Name</TableCell>
                <TableCell padding='checkbox'>Profile Status</TableCell>
                <TableCell padding='checkbox'>Indicator</TableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                {profiles.map(profile => (
                  <TableRow
                    hover
                    key={profile.id}
                  >
                    <TableCell size= 'small' className={classes.tableCell}>{profile.profilename}</TableCell>
                    <TableCell size= 'small' className={classes.tableCell}><b>{profile.status}:{profile.userId}</b></TableCell>
                    <TableCell size= 'small' className={classes.tableCell}>
                    {profile.amount < 50 ? <FiberManualRecordIcon style={{ color: '#8db600', fontSize: 25 }} /> : <FiberManualRecordIcon style={{ color: '#d6ecef', fontSize: 25 }} />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      </CardContent>
      <Divider />
    </Card>
  );
};

SupervisorReviewTile.propTypes = {
  className: PropTypes.string
};

export default SupervisorReviewTile;
