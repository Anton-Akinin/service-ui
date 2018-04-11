import * as React from 'react';
import { func, string } from 'prop-types';
import classNames from 'classnames/bind';
import LaunchInfoBlock from './launchInfoBlock';
import TestsTable from './testsTable';
import { PTTests, PTIssueType, PTColumns } from './pTypes';
import styles from './testsTableWidget.scss';

const cx = classNames.bind(styles);

function TestsTableWidget(props) {
  const { launchName, tests, nameClickHandler, issueType, columns } = props;

  return (
    <div className={cx('tests-table-widget')}>
      <div className={cx('widget-wrapper')}>
        <LaunchInfoBlock launchName={launchName} issueType={issueType} />
        <TestsTable columns={columns} tests={tests} nameClickHandler={nameClickHandler} />
      </div>
    </div>
  );
}

TestsTableWidget.propTypes = {
  launchName: string.isRequired,
  tests: PTTests.isRequired,
  nameClickHandler: func.isRequired,
  issueType: PTIssueType.isRequired,
  columns: PTColumns.isRequired,
};

export default TestsTableWidget;
