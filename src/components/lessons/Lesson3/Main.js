import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import './Main.css';

const ourWithHelloWorld = (WrappedComponent) => {
  const res = (props) => <WrappedComponent {...props} hello={'World'} />;
  res.displayName = WrappedComponent.displayName ?? "ourWithHelloWorld.Provider";

  return res;
};

const ComponentForWrap = ({ hello, ...props }) => {
  return 'TEST COMPONENT HAS ' + hello;
};

const WrappedComponentWithHello = ourWithHelloWorld(ComponentForWrap);

//const ourConnect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => props => <WrappedComponent {...props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />

function chunkArray(arr, cols) {
  if (cols < 2) return [arr];

  const length = arr.length,
    isEven = length % cols === 0;
  let result = [],
    i = 0;

  while (i < length) {
    let size = isEven ? Math.floor(length / cols) : Math.ceil((length - i) / cols--);
    result.push(arr.slice(i, (i += size)));
  }

  return result;
}

const ColumnSplitter = React.memo(({ children, itemsInColumns }) => {
  const columns = useMemo(
    () => chunkArray(React.Children.toArray(children), itemsInColumns),
    [children, itemsInColumns]
  );

  return (
    <div className={'columns-container'}>
      <div className={'rowcheg'}>
        {columns.map((column, index) => (
          <div className={'columncheg'}>{column}</div>
        ))}
      </div>
    </div>
  );
});

ColumnSplitter.defaultProps = {
  itemsInColumns: 2,
};

const columns = [
  <div>1st</div>,
  <div>2nd</div>,
  <div>3rd</div>,
  <div>4th</div>,
  <div>5th</div>,
  <div>6th</div>,
  <div>7th</div>,
  <div>8th</div>,
  <div>9th</div>,
  <div>10th</div>,
  <div>11th</div>,
];

const Lesson3 = () => {
  return (
    <React.Fragment>
      <WrappedComponentWithHello />
      <ColumnSplitter itemsInColumns={5}>{columns}</ColumnSplitter>
    </React.Fragment>
  );
};

export default Lesson3;
