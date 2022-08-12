import React from 'react'
import Approach from '../components/Approach'
import AreaChart from '../components/AreaChart'
import Cards from '../components/Cards'
import DonutChart from '../components/DonutChart'
import Illustrations from '../components/Illustrations'
import PageHeading from '../components/PageHeading'
import Projects from '../components/Projects'
import ColorSystem from './ColorSystem'


function Dashboard() {
  return (
    <>
    <PageHeading heading = "Dashboard" />
              <div className="row">
              <Cards color='primary' title = 'EARNINGS(MONTHLY)' earnings='$40,000' logo = 'fa-calendar'/>
        <Cards color='success' title = 'EARNINGS(ANNUAL)' earnings='$215,000' logo = 'fa-dollar'/>
        <Cards color='info' title = 'TASKS' logo = 'fa-clipboard'/>
        <Cards color='danger' title = 'PENDING REQUESTS' logo = 'fa-comments'/>
              </div>
              <div class="row">
                <div class="col-xl-8 col-lg-7">
                  <AreaChart/>
                  
                </div>
                <div class="col-xl-4 col-lg-5">
                  <DonutChart/>
                  
                </div>
                
              </div>
              <div className='row'>
              <div class="col-lg-6 mb-4">
                <Projects/>
                <ColorSystem/>
              </div>
              <div class="col-lg-6 mb-4">
                <Illustrations/>
                <Approach/>
              </div>

              </div>
    </>
  )
}

export default Dashboard