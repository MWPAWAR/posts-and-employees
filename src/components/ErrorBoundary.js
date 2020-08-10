import React from 'react';
import { FormattedMessage } from 'react-intl';

import Error from '../components/core/error/Error';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error
          message={<FormattedMessage id="app.error-something-went-wrong" />}
        />
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
