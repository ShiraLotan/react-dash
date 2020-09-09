import React from "react";
import { connect } from 'react-redux';
import Widgets from "./Widgets";
import Chart from "./chart";
import Footer from "./Footer";
import RouteBtn from "./RouteBtn";

function Dashboard({state}) {

  return (
    <div>
        {state ? state.map((x, i)=> <Widgets key={i} data={x}/>): null}
        { state ? <RouteBtn widgets={state}/> : null}
        <Chart/>
        <Footer/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Dashboard)
