import React from 'react';
import { Table as AntdTable } from 'antd'

const Table = ({ data, ...rest }) => {
    return <AntdTable dataSource={data} {...rest} />
}

Table.defaultProps = {
    pagination: false
}

export default Table;