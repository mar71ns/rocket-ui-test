import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setFilter, resetFilter } from '../actions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  formControl: {
    minWidth: 200,
  },
});

const Filter = () => {
  
  const { rockets } = useSelector(state => (state.rocketCollection))
  const { filter } = useSelector(state => (state.appCollection));
  const dispatch = useDispatch();
  const classes = useStyles();
  const status = [
    {
      value: '',
      name: 'All Status'
    },
    {
      value: true,
      name: 'Success'
    },
    {
      value: false,
      name: 'Failure'
    },
  ]
  
  const handleChange = (event, id) => {
    dispatch(setFilter({ id, value: event.target.value }))
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader
        subheader='Filter'
      />
      <CardContent>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
            Rockets
          </InputLabel>
          <Select
            labelId='selectRocketFilter'
            id='selectRocketFilter'
            value={filter.rocket_id}
            onChange={(e) => handleChange(e, 'rocket_id')}
            displayEmpty
          >
            <MenuItem value=''>
              All Rockets
            </MenuItem>
            {
              rockets.map((rocket)=>(
                <MenuItem key={rocket.rocket_id} value={rocket.rocket_id}>
                  {rocket.rocket_name}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        </CardContent>
        <CardContent>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
            Launch Status
          </InputLabel>
          <Select
            labelId='selectLauchStatus'
            id='selectLauchStatus'
            value={filter.launch_success}
            onChange={(e) => handleChange(e, 'launch_success')}
            displayEmpty
          >
            {
              status.map((stat) => (
                <MenuItem key={stat.value} value={stat.value}>
                  {stat.name}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button onClick={()=> dispatch(resetFilter())} size='small'>Reset Filter</Button>
      </CardActions>
    </Card>
  );
}

export default Filter;
