import React from 'react';
import PropTypes from 'prop-types';

function Background({ children }) {
  return (
    <div style={{
      backgroundImage: `url('https://wallpapershome.com/images/wallpapers/art-2560x1440-space-galaxy-universe-stars-11476.jpg')`,
      backgroundRepeat: 'no-repeat',
      resizeMode: 'cover',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: 'fixed',
      height: '100%',
      width: '100%',
      zIndex: -1
    }}>
      {children}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.element
}

Background.defaultProps = {
  children: null
};

export default Background;

