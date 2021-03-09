
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import Sidebar from '../components/Sidebar';
import Launch from '../components/Launch';
import Filter from '../components/Filter';
import Status from '../components/Status';
import Background from '../components/Background';
import { fetchLaunchesIfNeeded, fetchRocketsIfNeeded, applyFilter } from '../actions';

const LaunchesView = () => {
  
  const dispatch = useDispatch();
  const launchCollection = useSelector(state => (state.launchCollection))
  const rocketCollection = useSelector(state => (state.rocketCollection))
  const { filter } = useSelector(state => (state.appCollection))
  const [expanded, setExpanded] = useState(false);
  const [launches, setLaunches] = useState(launchCollection.launches); 

  useEffect(() => {
    setLaunches(applyFilter(launchCollection.launches, filter))
  }, [filter, launchCollection]); 

  useEffect(() => {
    dispatch(fetchLaunchesIfNeeded({ launchCollection }));
    dispatch(fetchRocketsIfNeeded({ rocketCollection }));
  }, []); 

  const handleChange = (name) => {
    setExpanded(expanded === name ? '' : name);
  };

  const renderContent = () => {

    if (!launchCollection || launchCollection.fetching) {
      return (
        <Status loading>
          <Typography variant='h6'>LOADING DATA</Typography>
        </Status>
      )
    }
    
    if (launches.length === 0) {
      return <Status>
        <Typography variant='h6'>NO DATA</Typography>
      </Status>
    }

    return (
      <Grid item xs={12} >
        {launches.map((launch, index) => (
            <Launch {...{
              key: launch.mission_name,
              expanded: expanded === launch.mission_name,
              handleChange,
              launch,
            }} />
          ))}
       </Grid>
    );
  }
  
  return (
    <div>
      <Background/>
      <Container>
        <Sidebar>
          <Filter/>
        </Sidebar>
        <div style={{ marginTop: 100 }} />
        {renderContent()}      
      </Container>
    </div>
  );  
}

export default LaunchesView;
