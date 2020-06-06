import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';


import ReviewReportBody from './ReviewReportBody';
import PnlPaaApprovalBody from './PnlPaaApprovalBody';

function TabPanel(props) {
    const { children, value, index} = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
      >
        {value === index && <Box>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  

const useStyles = makeStyles(theme => ({
  content: {
    padding:'0 !important',
    overflow: 'auto',
  },
  cardheader:{
    padding: 8,
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1,
    color:'#fff',
    backgroundImage: 'linear-gradient(to bottom, #93d2e4, #4392d6)'
  },
  popper:{
    zIndex: 1
  }
}));


const PnlPaaReviewTile = () => {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const [checked, setChecked] = React.useState(['Review Report', 'Adjustment Upload','Pending Impact']);
  const data= ['Review Report', 'Approval', 'Adjustment Upload','Adjustment Approval', 'Pending Impact', 'Extra Tabs'];

 

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleChecked = datavalue => () => {
    const currentIndex = checked.indexOf(datavalue);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(datavalue);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div  >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          
        >
         {data.map(profile => (
                  <Tab label={profile}/>
                ))}
        </Tabs>
        <TabPanel value={value} index={0}>
        <ReviewReportBody />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PnlPaaApprovalBody />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Panel 3
      </TabPanel>
      <TabPanel value={value} index={3}>
        Panel 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Panel 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Panel 6
      </TabPanel>
    </div>
  );
};

PnlPaaReviewTile.propTypes = {
  className: PropTypes.string
};

export default PnlPaaReviewTile;
