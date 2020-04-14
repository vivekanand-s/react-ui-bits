import React from 'react'

const withStyles = (Component, styles={}) => React.forwardRef((props, ref) => {
    
  return <Component ref={ref} styles={styles}  {...props} />;

});

export default withStyles