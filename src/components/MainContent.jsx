import React from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Cards from "./Cards";
import Dashboard from "./Dashboard";
import DonutChart from "./DonutChart";
import Footer from "./Footer";
import PageHeading from "./PageHeading";
import Topbar from "./Topbar";

function MainContent() {
  return (
    <>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <PageHeading />
            <div class="row">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div class="row">
              <div class="col-xl-8 col-lg-7">
                <AreaChart />
                <BarChart />
              </div>
              <div class="col-xl-4 col-lg-5">
                <DonutChart />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default MainContent;
