import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Posts, PostDetails } from './components/posts';
import { Employees, EmployeeDetails } from './components/employees';

import ErrorBoundary from './components/ErrorBoundary';
import { getActiveTab } from './helpers/url-helper';
import { TABS } from './constants/ui-constants';
import { APP_LINKS } from './constants/url-constants';
import styles from './App.module.css';

const App = ({ location }) => (
  <ErrorBoundary>
    <div className={styles.tabsContainer}>
      {TABS.map((tab) => (
        <Link
          to={`/${tab}`}
          className={classNames(styles.tabItem, {
            [styles.active]: tab === getActiveTab(location),
          })}
        >
          <FormattedMessage id={`app.${tab}.label`} />
        </Link>
      ))}
    </div>
    <Switch>
      <Route exact path={APP_LINKS.POSTS} component={Posts} />
      <Route exact path={APP_LINKS.POST_DETAILS} component={PostDetails} />
      <Route exact path={APP_LINKS.EMPLOYEES} component={Employees} />
      <Route exact path={APP_LINKS.EMPLOYEE_DETAILS} component={EmployeeDetails} />
      <Redirect to={APP_LINKS.POSTS} />
    </Switch>
  </ErrorBoundary>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default App;
