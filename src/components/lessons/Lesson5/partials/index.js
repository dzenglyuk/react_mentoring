import React, { useState } from 'react';
import Table from './Table';
import Filters from './Filters';
import ColumnsProvider from './ColumnsProvider';
import TableDataProvider from './TableDataProvider';

const Main = ({ filterProps, ...props }) => {
    // filters = Array of {name: string, value: array of object}
    const [filters, setFilters] = useState(filterProps?.defaultFilters ?? []);
    // const renderTable = (columns, data, ...rest) => {
    //     return <Table {...props} data={data} columns={columns} />
    // }

    return <div>
        <Filters defaultFilters={filters} onChange={setFilters} {...filterProps} />
        <TableDataProvider filters={filters}>
            {
                data => <ColumnsProvider>
                    {
                        (columns) => <Table {...props} data={data} columns={columns} />
                    }
                </ColumnsProvider>
            }
        </TableDataProvider>
    </div>
}

export default Main;