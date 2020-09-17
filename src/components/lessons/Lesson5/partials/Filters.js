import React, { useState } from 'react';

import './Filters.css';

const Filter = React.memo(({ onChange, ...rest }) => {
    return 'Filter';
})

class FiltersTracker extends React.PureComponent {
    componentDidUpdate = ({ filters: prevFilters }) => {
        const { filters, onChange } = this.props;

        if (prevFilters === filters) {
            return;
        }

        onChange && onChange(filters);
    }

    render() {
        return null;
    }
}

const Filters = ({ defaultFilters, onChange, ...rest }) => {
    const [filters, setFilters] = useState(defaultFilters ?? []);

    const getHandleFilterChange = item => value => {
        const processFilter = filter => {
            if (filter.name !== item.name) {
                return filter;
            }

            return { ...filter, values: value };
        }

        setFilters(filters.map(processFilter));
    }

    return <div className={'table-filters'}>
        Filters:
        <FiltersTracker filters={filters} onChange={onChange} />
        {filters.map(item => <Filter onChange={getHandleFilterChange(item)} {...item} />)}
    </div>
}

export default React.memo(Filters);