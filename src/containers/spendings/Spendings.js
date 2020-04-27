import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {SpendingsController, TagsController} from '../../libs/controllers';
import SpendingComponent from './component';

configLocalCalendar();

class Spendings extends Component {
  state = {};

  componentDidMount = () => {
    const {fetchTags} = this.props;
    fetchTags();
  };

  render() {
    const {tag} = this.props;
    return <SpendingComponent tag={tag} />;
  }
}

const mapStateToProps = state => {
  const {tag} = state;
  return {tag};
};

const mapDispatchToProps = dispatch => ({
  fetchTags: () => TagsController.getAllTags(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Spendings),
);
