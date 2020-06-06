import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



// import Slider from '@material-ui/core/Slider';
import StepConnector from '@material-ui/core/StepConnector';
import TextField from '@material-ui/core/TextField';
import DateRangeIcon from '@material-ui/icons/DateRange';


const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#4392d6',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#4392d6',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);


function getSteps() {
  return ['Started', 'Completed', 'KPI/KRI Attested', 'Approved'];
}

const useStyles = makeStyles(theme => ({

  container: {
    backgroundColor: '#FFF',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  activeIcon: {
    color: "#4392d6 !important"
  },
  completedIcon:{
    color: "#4392d6 !important"
  },
  title: {
    flexGrow:1,
  }
}));

export default function BodyHeader() {
  const classes = useStyles();
  const [activeStep /* , setActiveStep*/ ] = React.useState(1);
  const steps = getSteps();

  /*
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  */

  return (
    <Container maxWidth='xl' className={classes.container}>

     <Grid container justify="center" alignItems="center">

      <span>
        <Stepper activeStep={activeStep} connector={<QontoConnector /> } alternativeLabel>
        {steps.map(label => (
          <Step>
            <StepLabel  StepIconProps={{
        classes: {
            active: classes.activeIcon,
            completed: classes.completedIcon
               }
               }}>{label}</StepLabel>
          </Step>
         ))}
      </Stepper>
      </span>
      <span>
      <form noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <DateRangeIcon />
    </form>
    </span>

      </Grid>
      {/* <div>
        {activeStep === steps.length ? (
          <div>
            {document.addEventListener('keydown', handleReset)}
          </div>
        ) : (
          <div>
            <div>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {'Next'}
              </Button>
            </div>
          </div>
        )}
      </div> */}
    
      </Container>


  );
}
