import React from 'react';

import Table from './partials/index';
import Loader from './Loader';

const TableWithLoader = (props) => {
    return <React.Fragment>
        <Loader />
        <Table {...props} />
    </React.Fragment>
};

export default TableWithLoader;