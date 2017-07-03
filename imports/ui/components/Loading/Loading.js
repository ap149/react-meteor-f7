import React from 'react';

import './Loading.css';

import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
  <div className="fullscreen loading-container">
    <CircularProgress />
  </div>
);

export default Loading;