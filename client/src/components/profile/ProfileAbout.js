import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get First name only
    const firstName = profile.user.name.trim().split(' ')[0];

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{firstName}'s Biography</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} hasn't given any information yet</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
