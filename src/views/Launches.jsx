
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ConnectedView from './ConnectedView';
import { fetchLaunchesIfNeeded, fetchRocketsIfNeeded } from "../actions";
// import {fetchLaunchesIfNeeded} from "../actions/LaunchesActions";
import Launch from '../components/Launch';

const LaunchesView = () => {
  
  const dispatch = useDispatch();
  const launchCollection = useSelector(state => (state.launchCollection))
  const rocketCollection = useSelector(state => (state.rocketCollection))
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    dispatch(fetchLaunchesIfNeeded({ launchCollection }));
    dispatch(fetchRocketsIfNeeded({ rocketCollection }));
  }, []);
  console.log({rocketCollection});
  const handleChange = (name) => {
    setExpanded(expanded === name ? "" : name);
  };

  const renderContent = () => {

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    return (
      <ul>
        {launchCollection.launches.map((launch, index) => (
          <Launch {...{
            key: launch.mission_name,
            expanded: expanded === launch.mission_name,
            handleChange,
            launch,
          }} />
        ))}
      </ul>
    );
  }
  
    return (
      <div>
        <h2> SpaceX launches </h2>
        {renderContent()}
      </div>
    );
  
}

// export default LaunchesView;
export default ConnectedView(LaunchesView, 'launches');
