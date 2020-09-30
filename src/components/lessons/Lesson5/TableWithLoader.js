import React, { useState } from 'react';

import Table from './partials/index';
import Loader from './Loader';

const TableWithLoader = (props) => {
    const [data, setData] = useState([]);

    return <React.Fragment>
        <Loader />
        <Table {...props} />
    </React.Fragment>
};

export default React.memo(TableWithLoader);