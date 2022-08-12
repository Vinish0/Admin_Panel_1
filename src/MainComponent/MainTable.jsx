import React from 'react'
import PageHeading from '../components/PageHeading'
import Table from '../components/Table'

function MainTable() {
  const paragraph = `DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation.`
  return (
    <>
    <PageHeading heading="Tables" paragraph={paragraph}/>
    <Table/>
    </>
  )
}

export default MainTable