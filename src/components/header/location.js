import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Location } from '@reach/router';

class SomeComponent extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props;
    return <div>{JSON.stringify(location)}</div>;
  }
}

export default props => (
  <Location>
    {locationProps => <SomeComponent {...locationProps} {...props} />}
  </Location>
);