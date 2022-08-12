import React from 'react'
import AreaChart from '../components/AreaChart'
import BarChart from '../components/BarChart'
import PageHeading from '../components/PageHeading'

function MainCharts() {

  const paragraph = `Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the official Chart.js documentation.`
  return (
    <>
    <PageHeading heading="Charts" paragraph = {paragraph}/>
    <div className='row'>
    <div class="col-xl-8 col-lg-7 d-flex">
      <AreaChart/>
      <BarChart/>
    </div>

    </div>
    </>
  )
}

export default MainCharts