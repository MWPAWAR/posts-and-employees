import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

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
        <Typography variant="h5" color="error" component="div" align="center">
          <FormattedMessage id="app.error-something-went-wrong" />
        </Typography>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
