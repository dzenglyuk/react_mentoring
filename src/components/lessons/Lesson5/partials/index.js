import React, { useState } from 'react';
import Table from './Table';
import Filters from './Filters';
import ColumnsProvider from './ColumnsProvider';
import TableDataProvider from './TableDataProvider';

const Main = ({ filterProps, defaultData, defaultFilters, ...props }) => {
    // filters = Array of {name: string, value: array of object}
    const [filters, setFilters] = useState(defaultFilters ?? []);
    const [data, setData] = useState(defaultData ?? []);

    return <div>
        <ColumnsProvider>
            {
                columns => <TableDataProvider data={data} columns={columns} filters={filters}>
                    {
                        filteredData => <React.Fragment>
                            <Filters columns={columns} defaultFilters={filters} onChange={setFilters} {...filterProps} />
                            <Table {...props} data={filteredData} columns={columns} />
                        </React.Fragment>
                    }
                </TableDataProvider>
            }
        </ColumnsProvider>
    </div>
}

export default Main;