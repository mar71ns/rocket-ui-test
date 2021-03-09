import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const routeList = [
  {
    to: '/',
    name: 'Home'
  },
  {
    to: 'launches',
    name: 'Launches'
  },
]
const Navigation = () => (
  <List>
    {routeList.map((route)=> (
      <ListItem key = {route.to}>
          <Link to={route.to}>
        <Typography variant='h6' noWrap>
            {route.name}
        </Typography>
          </Link>
      </ListItem>
    ))}
  </List>
);

export default Navigation;
