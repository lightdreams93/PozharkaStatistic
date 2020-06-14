import React from 'react'
import Table from './Table'
import Error from '../../../error/Error'

const TableData = (props) => {
    const { data, navigation } = props

    return (typeof data !== 'undefined') ? <Table data={data} navigation={navigation} /> : <Error />
}

export default TableData