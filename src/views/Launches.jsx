
import React, { Component, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/LaunchesActions";
import Launch from '../components/Launch';

const LaunchesView = () => {
  
  const dispatch = useDispatch();
  const launchCollection = useSelector(state => (state.launchCollection))
  
  useEffect(() => {
    dispatch(fetchLaunchesIfNeeded({ launchCollection }));
  }, []);

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
            key: launch.launch_id,
            launch
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
