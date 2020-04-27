import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {configLocalCalendar} from '../../common-components/calendar/Calendar';
import {IncomesController, TagsController} from '../../libs/controllers';
import IncomesComponent from './component';
configLocalCalendar();

class Incomes extends Component {
  state = {};

  componentDidMount = () => {
    const {fetchTags} = this.props;
    fetchTags();
  };

  render() {
    const {tag, navigation} = this.props;
    return <IncomesComponent navigation={navigation} tag={tag} />;
  }
}

const mapStateToProps = state => {
  const {tag} = state;
  return {tag};
};

const mapDispatchToProps = dispatch => ({
  createIncome: data => IncomesController.createIncome(dispatch, data),
  fetchTags: () => TagsController.getAllTags(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Incomes),
);
