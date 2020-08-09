import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { Switch, Route, Redirect } from 'react-router-dom';

import Posts from './components/posts/Posts';
import Employees from './components/employees/Employees';
import Post from './components/posts/PostDetails';
import Employee from './components/employees/EmployeeDetails';
import ErrorBoundary from './components/ErrorBoundary';
import { APP_LINKS, getActiveTabIndex, TABS } from './helpers/url-helper';

const App = ({ history, location }) => {
  const [tabIndex, setTabIndex] = useState(getActiveTabIndex(location));

  const handleTabChange = (_, newTabIndex) => {
    setTabIndex(newTabIndex);
    history.push(`/${TABS[newTabIndex]}`);
  };

  return (
    <ErrorBoundary>
      <Paper>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Posts" />
          <Tab label="Employees" />
        </Tabs>
      </Paper>
      <Switch>
        <Route exact path={APP_LINKS.POSTS} component={Posts} />
        <Route exact path={APP_LINKS.POST_DETAILS} component={Post} />
        <Route exact path={APP_LINKS.EMPLOYEES} component={Employees} />
        <Route exact path={APP_LINKS.EMPLOYEE_DETAILS} component={Employee} />
        <Redirect to={APP_LINKS.POSTS} />
      </Switch>
    </ErrorBoundary>
  );
};

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
}

export default App;
