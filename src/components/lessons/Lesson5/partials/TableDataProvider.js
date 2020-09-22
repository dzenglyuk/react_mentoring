import React, { useMemo } from 'react';

const filterData = (data, filters = []) => {
    if (!filters.length) {
        return data;
    }

    const processFilter = (dataItem, filter) => {
        const { name: columnName, values: filterValue } = filter;

        const value = `${(dataItem[columnName] ?? '')}`;

        return value.includes(filterValue);
    }

    return data.filter(dataItem => filters.every(filter => processFilter(dataItem, filter)));
}

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

const TableDataProvider = React.memo(({ data, filters, children }) => {
    const res = useMemo(() => filterData(data, filters), [data, filters])

    return useMemo(() => children(res), [children, res]);
})

TableDataProvider.defaultProps = {
    data
}

export default TableDataProvider;