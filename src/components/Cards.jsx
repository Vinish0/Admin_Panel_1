import React from "react";

function Cards(props) {
  return (
    <>
      {/* <!-- Earnings (Monthly) Card Example --> */}
      <div class="col-xl-3 col-md-6 mb-4">
        <div class={`card border-left-${props.color} shadow h-100 py-2`}>
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>
                 {props.title}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                {props.earnings}
                </div>
              </div>
              <div class="col-auto">
                <i class={`fas ${props.logo} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    
  );
}

export default Cards;
