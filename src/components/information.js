import React from "react";
import Navbar from "./header";

const Info = (props) => {
  const {state,getStates}=props
    return (
      //render all states 
      <div className="info">
              <div className="stname">
                
                <input id="check" onClick={getStates} type="checkbox" value={state.id}></input>
                <label for="check">{state.state}</label>
              </div>
              {/* <div className="stdetail">
                    <div className="stdetail-status">
                          <div>
                              <h1>Selected States</h1>
                              <p>8</p>
                          </div>
                          <div>
                              <h1>Tested</h1>
                              <p>2000</p>
                          </div>
                          <div>
                              <h1>Confirmed</h1>
                              <p>1000</p>
                          </div>
                          <div>
                              <h1>Recovered</h1>
                              <p>1000</p> 
                          </div>
                    </div>
                    <div>

                    </div>
              </div> */}
      </div>
    );
  }


export default Info;

