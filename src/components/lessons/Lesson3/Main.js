import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import './Main.css';

const ourWithHelloWorld = WrappedComponent => {
    return (props) => <WrappedComponent  {...props} hello={'World'} />
}

const ComponentForWrap = ({ hello, ...props }) => {

    return 'TEST COMPONENT HAS ' + hello;
}

const WrappedComponentWithHello = ourWithHelloWorld(ComponentForWrap);

//const ourConnect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => props => <WrappedComponent {...props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />

function chunkArray(myArray, chunk_size) {
    const arrayLength = myArray.length;
    const tempArray = [];

    for (let index = 0; index < arrayLength; index += chunk_size) {
        const myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

const ColumnSplitter = React.memo(({ children, itemsInColumns }) => {
    const columns = useMemo(() => chunkArray(React.Children.toArray(children), itemsInColumns), [children, itemsInColumns]);

    return <div className={'columns-container'}>
        <div className={'rowcheg'}>
            {columns.map(column => <div className={'columncheg'}>{column}</div>)}
        </div>
    </div>
})

const Aka47Filters = ({ filters, columnsCount }) => {
    const count = Math.ceil(filters.length / columnsCount);

    return <ColumnSplitter itemsInColumns={count}>
        {filters}
    </ColumnSplitter>;
}

Aka47Filters.defaultProps = {
    columnsCount: 2
}

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
]

const Lesson3 = () => {
    return <React.Fragment>
        <WrappedComponentWithHello />
        <Aka47Filters columnsCount={5} filters={columns} />
    </React.Fragment>
}

export default Lesson3;