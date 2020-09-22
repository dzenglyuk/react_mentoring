import React, { useMemo } from 'react';

const ColumnsProvider = ({ children }) => {
    const columns = useMemo(() => [
        {
            title: 'Name',
            name: 'name',

            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            name: 'age',

            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            name: 'address',

            dataIndex: 'address',
            key: 'address',
        },
    ]);

    return useMemo(() => children(columns), [children, columns]);
}

export default ColumnsProvider;