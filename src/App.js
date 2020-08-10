import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Posts from './components/posts/Posts';
import Employees from './components/employees/Employees';
import Post from './components/posts/PostDetails';
import Employee from './components/employees/EmployeeDetails';
import ErrorBoundary from './components/ErrorBoundary';
import { APP_LINKS, TABS, getActiveTab } from './helpers/url-helper';

const App = ({ history, location }) => {
  const activeTab = getActiveTab(location);
  const handleTabChange = tab => {
    history.push(`/${tab}`);
  };

  return (
    <ErrorBoundary>
      <div className="tabs-container">
        {TABS.map(tab => (
          <div
            className={`tab-item ${tab === activeTab ? 'active' : ''}`}
            onClick={() => { handleTabChange(tab); }}
          >
            <FormattedMessage id={`app.${tab}.label`} />
          </div>
        ))}
      </div>
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
