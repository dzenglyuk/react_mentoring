import React, { useMemo } from 'react';

const ColumnsProvider = ({ children }) => {
    const columns = useMemo(() => [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ]);

    return useMemo(() => children(columns), [children, columns]);
}

export default ColumnsProvider;