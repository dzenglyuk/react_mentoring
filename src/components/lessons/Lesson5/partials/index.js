import React, { useState } from 'react';
import Table from './Table';
import Filters from './Filters';
import ColumnsProvider from './ColumnsProvider';
import TableDataProvider from './TableDataProvider';

const Main = ({ filterProps, data, defaultFilters, ColumnsProvider, TableDataProvider, Filters, Table, ...props }) => {
    // filters = Array of {name: string, values: array of object}
    const [filters, setFilters] = useState(defaultFilters ?? []);

    return <div>
        <ColumnsProvider>
            {
                columns => <TableDataProvider data={data} columns={columns} filters={filters}>
                    {
                        (filteredData, loading, reloading) => <React.Fragment>
                            <Filters columns={columns} defaultFilters={filters} onChange={setFilters} {...filterProps} />
                            <Table {...props} data={filteredData} columns={columns} />
                        </React.Fragment>
                    }
                </TableDataProvider>
            }
        </ColumnsProvider>
    </div>
}

Main.defaultProps = {
    Table,
    Filters,
    ColumnsProvider,
    TableDataProvider,
}

export default React.memo(Main);