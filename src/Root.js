import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import useGlobalStyles from './components/useGlobal';
import ProgressModal from './components/ProgressModal';
import { getFetching } from './store/selectors/app';

function Root() {
  const isFetching = useSelector(getFetching);

  useGlobalStyles();
  return (
    <BrowserRouter>
      <Routes />
      <ProgressModal open={isFetching} />
    </BrowserRouter>
  );
}

export default Root;
