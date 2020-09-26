import React from "react";
import Navbar from "./header";

const Stdetail = (props) => {
    const {confirmed,tested,Recovered,totalselected,getStates,tested1,confirmed1,Recovered1}=props;
    return (
      //render all the data
      <div>
              <div className="stdetail">
                    <div className="stdetail-status">
                          <div id="stdetail-status2">
                              <h2>Selected States</h2>
                                <p>{totalselected}</p>
                          </div>
                          <div id="stdetail-status1">
                              <h2>Deceased</h2>
                              <p>{tested}</p>
                          </div>
                          <div id="stdetail-status1">
                              <h2>Confirmed</h2>
                              <p>{confirmed}</p>
                          </div>
                          <div id="stdetail-status1">
                              <h2>Recovered</h2>
                              <p>{Recovered}</p> 
                          </div>
                    </div>
                    <div>

                    </div>
              </div>
              <div className="heading"> 
                  <h3>Graphical Representation</h3>

              </div>
              <div>
                  <h4>State wise</h4>
                  <div>
                      <h5 className="heading1">Tested confirmed and recovered states</h5>
                  </div>
                  <div className="detail">
                      <div id="detail1">
                        <h3>States</h3>
                        {getStates.map((state)=>{
                            return(
                            <p>{state}</p>
                            )
                        })}
                      </div>
                      <div id="detail2"> 
                        <h3>Deceased</h3>
                        {tested1.map((test)=>{
                            return(
                            <p>{test}</p>
                            )
                        })}
                      </div>
                      <div id="detail2">
                        <h3>Confirmed</h3>
                        {confirmed1.map((confirm)=>{
                            return(
                            <p>{confirm}</p>
                            )
                        })}
                      </div>
                      <div id="detail2">
                        <h3>Recovered</h3>
                        {Recovered1.map((recover)=>{
                            return(
                            <p>{recover}</p>
                            )
                        })}
                      </div>
                  </div>
              </div>
      </div>
    );
  }


export default Stdetail;

