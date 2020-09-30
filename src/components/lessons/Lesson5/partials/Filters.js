import React, { useCallback, useMemo, useState, useRef } from 'react';
import { Collapse, Input } from 'antd';
import './Filters.css';

const { Panel } = Collapse;

function debounce(func, wait) {
    let timeout
    return function (...args) {
        const context = this
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(context, args), wait)
    }
}

const FilterCollapser = React.memo(({ children, defaultIsOpened, ...rest }) => {
    const [isOpened, setIsOpened] = useState(defaultIsOpened ?? false)

    return <Collapse activeKey={isOpened ? ['1'] : []} onChange={() => setIsOpened(paramIsOpened => !paramIsOpened)}>
        <Panel header="Filters" key="1">
            {children}
        </Panel>
    </Collapse>
})

const Filter = React.memo(({ name, onChange, onClear, ...rest }) => {
    const handleChange = useCallback(e => {
        const val = e.target.value ?? "";
        const callback = val !== "" ? onChange : onClear;

        callback && callback(name, val);
    }, [name, onChange, onClear]);

    return <div className={'table-filter-container'}>
        <div>{name}:</div>
        <Input allowClear onChange={handleChange} />
    </div>
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

const Filters = React.memo(({ defaultFilters, debounceDelay, onChange, columns, ...rest }) => {
    const [filters, setFilters] = useState(defaultFilters ?? []);

    const handleFilterChange = useCallback(debounce((itemName, value) => {
        setFilters(filters => {
            if (!filters.some(({ name }) => itemName === name)) {
                return [...filters, { name: itemName, values: value }];
            }

            const processFilter = filter => {
                if (filter.name !== itemName) {
                    return filter;
                }

                return { ...filter, values: value };
            }

            return filters.map(processFilter)
        });
    }, debounceDelay), []);

    const handleFitlerClear = useCallback(debounce(itemName => {
        setFilters(filters => filters.filter(filter => filter.name !== itemName));
    }, debounceDelay), []);

    return <FilterCollapser>
        <FiltersTracker filters={filters} onChange={onChange} />
        <div className={'table-filters'}>
            {columns.map((column, index) => <Filter
                key={index}

                onChange={handleFilterChange}
                onClear={handleFitlerClear}

                {...column}
            />)}
        </div>
    </FilterCollapser>
})

Filters.defaultProps = {
    debounceDelay: 200
}

export default React.memo(Filters);