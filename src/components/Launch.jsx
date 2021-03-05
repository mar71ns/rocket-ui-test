import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  paragraph: {
    padding: 20,
    marginTop: 10,
    marginBottom: 20
  },
  media: {
    padding: 25, // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Launch = ({ launch, expanded, handleChange}) => {

  const classes = useStyles();
  const date = new Date(launch.launch_date_unix * 1000).toLocaleDateString("en-US");
  const imageURL = launch.links.flickr_images.length > 0 ? launch.links.flickr_images[0] : launch.links.mission_patch;  
  
  const renderAccordion = () => (
      <div className={classes.root}>
      <Accordion style={{ marginBottom: 10 }} expanded={expanded} onChange={() => handleChange(launch.mission_name)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={launch.mission_name}
          >
            <Typography style={{ color:"#aaa"}} variant="h4" >#{launch.flight_number}</Typography>
            <Avatar style={{marginInline: 15}} alt="Remy Sharp" src={launch.links.mission_patch_small} />
            <Typography variant="h4" >{launch.mission_name}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{flexDirection:"column"}}>
            <div className={classes.chipWrapper}>
              <Chip variant="outlined" color="primary" label={`Rocket ID: ${launch.rocket.rocket_id}`} />
              <Chip variant="outlined" label={`Lauch Date: ${date}`} />
              <Chip variant="default" style={{ color:"#FFF", backgroundColor: launch.launch_success ? 'LimeGreen' : 'Crimson' }}  label={launch.launch_success ? "Mission sucedded" : "Mission failed"} />
            </div>
            <Divider light />
              <div className={classes.paragraph}>
                <Typography paragraph>Details:</Typography>
                <Typography variant="body2" color="textSecondary">
                  {launch.details}
                </Typography>
              </div>
            <Divider light />
          <img className={classes.media} src={imageURL} alt={launch.mission_name} />
          </AccordionDetails>
        </Accordion>
      </div>
  )

  const renderCard = () => (
      <div className={classes.root}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
               {launch.flight_number}
              </Avatar>
            }
            action={
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleChange(launch.mission_name)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography> */}
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={() => handleChange(launch.mission_name)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions> */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={launch.links.mission_patch}
                title="Paella dish"
              />
              <Typography paragraph>Details:</Typography>
              <Typography variant="body2" color="textSecondary">
                {launch.details}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
  )

  return renderAccordion();
}

export default Launch;
