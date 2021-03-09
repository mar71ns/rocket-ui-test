import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20
  },
  chipWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginBottom: 10
  },
  paragraph: {
    padding: 20,
    marginTop: 10,
    marginBottom: 20
  },
  media: {
    padding: 25,
  },
}));


const Launch = ({ launch, expanded, handleChange}) => {

  const classes = useStyles();
  const date = new Date(launch.launch_date_unix * 1000).toLocaleDateString('en-US');
  const imageURL = launch.links.flickr_images.length > 0 ? launch.links.flickr_images[0] : launch.links.mission_patch;  
  const rocket = useSelector(state => (state.rocketCollection.rockets.find(item => item.rocket_id === launch.rocket.rocket_id)));
  const costPerLaunch = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(rocket.cost_per_launch);
  
  const renderAccordion = () => (
      <div className={classes.root}>
       <Accordion style={{ marginBottom: 10 }} expanded={expanded} onChange={() => handleChange(launch.mission_name)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={launch.mission_name}
          >
            <Typography style={{ color:'#aaa'}} variant='h4' >#{launch.flight_number}</Typography>
            <Avatar style={{marginInline: 15}} alt='Remy Sharp' src={launch.links.mission_patch_small} />
            <Typography variant='h4' >{launch.mission_name}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{flexDirection:'column'}}>
            <div className={classes.chipWrapper}>
              <Chip color='primary' label={`Rocket ID: ${launch.rocket.rocket_id}`} />
              <Chip label={`Launch Cost: ${costPerLaunch}`} />
              <Chip variant='outlined' label={`Lauch Date: ${date}`} />
              <Chip variant='default' style={{ color:'#FFF', backgroundColor: launch.launch_success ? 'LimeGreen' : 'Crimson' }}  label={launch.launch_success ? 'Launch sucedded' : 'Launch failed'} />
            </div>
            <Divider light />
              {rocket.description &&
                <div className={classes.paragraph}>
                  <Typography variant='h6'>Rocket Description:</Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {rocket.description}
                      </Typography>
                </div>
              }
              <Divider light />
              {launch.details &&
                <div className={classes.paragraph}>
                  <Typography variant='h6'>Launch Details:</Typography>

                      <Typography variant='body2' color='textSecondary'>
                        {launch.details}
                      </Typography>

                </div>
              }
            <Divider light />
          <img className={classes.media} src={imageURL} alt={launch.mission_name} />
          </AccordionDetails>
        </Accordion>
      </div>
  )
  return renderAccordion();
}

export default Launch;
