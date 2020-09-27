import React from "react";
import Navbar from "./header";
import Info from "./information";
import Stdetail from "./statedetail";

class App extends React.Component {
  constructor() {
    super();
    //its a state
    this.state={
        states:[],
        selected_states:[],
        tested:'',
        confirmed:'',
        Recovered:'',
        tested1:[],
        confirmed1:[],
        Recovered1:[],
        getStates:[],
        fetchdata:[],
        keys:[],
        common:[],
        searchdate:'',
        totalselected:''
    }
  }

  //fetching url for get all states name
  componentDidMount(){
    let url='https://api.covidindiatracker.com/state_data.json';
    const {states}=this.state;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            states: result
          });
          console.log(this.state.states);
        },
        (error) => {
          this.setState({
            moviedetail:[],
            error
          });
        }
      )

      this.fetchapi();
  }

  //htis is for trim the string
 trimstr=(string, charToRemove)=>{
  while(string.charAt(0)==charToRemove) {
    string = string.substring(1);
}

while(string.charAt(string.length-1)==charToRemove) {
    string = string.substring(0,string.length-1);
}

return string;
 }

 //this is for removing duplicates from array
 getunique=(array)=>{
  let uniqueArray = [];
        
  // Loop through array values
  for(let i=0; i < array.length; i++){
      if(uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
      }
  }
  return uniqueArray;
 }

 //its handle the checkbox functionality
  getStates=(e)=>{
    let {getStates,states,fetchdata,keys,confirmed,searchdate,totalselected,tested1,confirmed1,Recovered1}=this.state;
      console.log(e.target.value);
      let check=e.target.checked;
      let value=e.target.value;
      if(check){ 
        let trim=this.trimstr(value,"I");
        let trim1=this.trimstr(trim,"N");
        let trim2=this.trimstr(trim1,"-");
        let trim3=trim2.toLowerCase();
        getStates.push(trim3);
      }else{
        let trim=this.trimstr(value,"I");
        let trim1=this.trimstr(trim,"N");
        let trim2=this.trimstr(trim1,"-");
        let trim3=trim2.toLowerCase();
        let index=getStates.indexOf(trim3);
        getStates.splice(index, 1);
      }
      let length=getStates.length;
      this.handlenavbar();
      let index=[];
      let data1=0;
      let data2=0;
      let data3=0;
      let arr1=[];
      let arr2=[];
      let arr3=[];
      fetchdata.states_daily.map((data)=>{
          let date=this.formatdate(data.date);
          if(date==searchdate){
              tested1=[];
              confirmed1=[];
              Recovered1=[];
              if(data.status=="Confirmed"){
                
                  getStates.map((state1)=>{
                    confirmed1.push(data[state1]);
                    arr1=this.getunique(confirmed1);
                     data1=data1+parseInt(data[state1]);
                     console.log(data1);
                  })
              }
              if(data.status=="Recovered"){

                getStates.map((state1)=>{
                  Recovered1.push(data[state1]);
                  arr2=this.getunique(Recovered1);
                  console.log(arr2);
                  Recovered1.push(data[state1]);
                   data2=data2+parseInt(data[state1]);
                   console.log(data2);
                })
              }

              if(data.status=="Deceased"){

                getStates.map((state1)=>{
                  tested1.push(data[state1]);
                  arr3=this.getunique(tested1);
                  tested1.push(data[state1]);
                   data3=data3+parseInt(data[state1]);
                   console.log(data3);
                })
              }
          }
         
        
      })

      this.setState({
        tested:data3,
        confirmed:data1,
        Recovered:data2,
        totalselected:length,
        tested1:arr3,
        confirmed1:arr1,
        Recovered1:arr2,
      })
      
      console.log(confirmed);
      console.log(keys);
      
  }

  //it fetch api for getting the statewise data
  fetchapi=()=>{
    const {fetchdata}=this.state;
        let url='https://api.covid19india.org/states_daily.json';

        fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            fetchdata: result
          });
          console.log(this.state.fetchdata);
        },
        (error) => {
          this.setState({
            moviedetail:[],
            error
          });
        }
      )
  }

  //it set the format of date
  formatdate=(date)=>{
    let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }


 
//it handle date input
  handlenavbar=()=>{
      console.log(document.getElementById("search").value);
      let date=document.getElementById("search").value;
      let {states,fetchdata,getStates,keys,confirmed,searchdate,tested1,confirmed1,Recovered1}=this.state;
      this.setState({
        searchdate : date
      })
       tested1.splice(0,tested1.length);
      confirmed1.splice(0,confirmed1.length);
      Recovered1.splice(0,Recovered1.length);
      console.log(tested1);
      console.log("hii");
      let data1=0;
      let data2=0;
      let data3=0;
      let arr1=[];
      let arr2=[];
      let arr3=[];
      fetchdata.states_daily.map((data)=>{
          let date1=this.formatdate(data.date);
          if(date1==date){
              tested1=[];
              confirmed1=[];
              Recovered1=[];
              if(data.status=="Confirmed"){
                
                  getStates.map((state1)=>{
                    confirmed1.push(data[state1]);
                    arr1=this.getunique(confirmed1);
                     data1=data1+parseInt(data[state1]);
                     console.log(data1);
                  })
              }
              if(data.status=="Recovered"){

                getStates.map((state1)=>{
                  Recovered1.push(data[state1]);
                  arr2=this.getunique(Recovered1);
                  console.log(arr2);
                  Recovered1.push(data[state1]);
                   data2=data2+parseInt(data[state1]);
                   console.log(data2);
                })
              }

              if(data.status=="Deceased"){

                getStates.map((state1)=>{
                  tested1.push(data[state1]);
                  arr3=this.getunique(tested1);
                  tested1.push(data[state1]);
                   data3=data3+parseInt(data[state1]);
                   console.log(data3);
                })
              }
          }
         
        
      })
      this.setState({
        tested:data3,
        confirmed:data1,
        Recovered:data2,
        tested1:arr3,
        confirmed1:arr1,
        Recovered1:arr2,
      })
      
     
  }



  render () {
      const {states,confirmed,tested,Recovered,totalselected,getStates,tested1,confirmed1,Recovered1} =this.state;
    return (
      <div className="App">
          <div>
              <Navbar handle={this.handlenavbar}></Navbar>
              <div className="container">
                <div>
                {states.map((state) => {
                  return (
                  <Info getStates={this.getStates} state={state}/>
                  )
                })}
                </div>
                <div>
                    <Stdetail confirmed={confirmed} tested={tested} Recovered={Recovered} totalselected={totalselected}
                      getStates={getStates} tested1={tested1} confirmed1={confirmed1} Recovered1={Recovered1}
                    ></Stdetail>
                </div>
              </div>
              
          </div>
        
      </div>
    );
  }
}

export default App;

