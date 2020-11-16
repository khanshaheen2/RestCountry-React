import React,{ Component } from "react";
import axios from "axios";
import "./App.css";
export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get("https://restcountries.eu/rest/v2/all").then((posRes)=>{
      this.setState({
        data:posRes.data
      })
    },(errRes)=>{
      console.log(errRes);
    })
  }
  render(){
    return(
      <div className="row">
        {this.state.data.map((e,i)=>(
           <div className="col-sm-4">
             <div className="card">
               <img className="card-img-top"width="300" height="250" src={e.flag}></img>
               <div className="card-body">
                <h3>Name:  {e.name}</h3>
                <h5>Capital:    {e.capital}</h5>
                <h5>Region:     {e.region}</h5>
               <h5>Population:    {e.population}</h5>
               <h5>NativeName:     {e.nativeName}</h5>
                </div>
                <div className="card-footer">
                <div className="stat">
                <div className="value">{e.callingCodes}</div>
                  <div className="type">CallingCode</div>
                </div>
                <div className="stat border">
               <div className="value">{e.numericCode}</div>
                  <div className="type">NumericCode</div>
                </div>
                <div className="stat">
                <div className="value">{e.alpha2Code}</div>
                  <div className="type">AlphaCode</div>
                </div>
                </div>
             </div>
           </div>
        ))}
        
      </div>
    )
  }
}