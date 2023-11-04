import React, { Component } from 'react'
import axios from 'axios';


export default class ZipSearch extends Component {
  constructor(){
    super();
    this.state ={
        zipCode:"",
        countryCode:"",
        informationObj:{},
        flag:false

    }
  }

  handleSubmit = async () =>{
    const res = await axios.get(`https://api.zippopotam.us/${this.state.countryCode.toUpperCase()}/${this.state.zipCode}`)
    const data = res.data;
    console.log(data);
     this.setState({
        flag:!this.state.flag,
        informationObj:{...data}
     })
  }

  handleReset = () => {
    this.setState({
        zipCode:"",
        countryCode:"",
        informationObj:{},
        flag:false
    })
  }


  render() {
    return (
        <>
            <div className='content-wrapper' style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <div className="input-group input-group-lg " style={{width:"25rem",  position:"absolute", top:"25vh"}} >
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='zipcode' value={this.state.zipCode} onChange={(e)=>this.setState({zipCode:e.target.value.toUpperCase()})}/>
                    </div>
                    <div className="input-group input-group-lg" style={{width:"25rem", position:"absolute", top:"32vh"}}>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Country Code' value={this.state.countryCode} onChange={(e)=>this.setState({countryCode:e.target.value})}/>
                    </div>
            </div>
            <div className='button-wrapper' >
                    <button type="button" className="btn btn-primary" style={{position:"absolute", top:"40vh", left:"47vw"}} onClick={this.handleSubmit}>Submit</button>
            </div>

            {   
               ((Object.keys(this.state.informationObj).length === 0))?
                
                <div className="spinner-border" role="status" style={{position:"absolute", top:"50vh",left:"49vw"}} >
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div style={{position:"absolute", top:"50vh", left:"41vw"}}>
                        <div className='information-block' >

                            {  this.state.informationObj.places.map(placesObj => (
                                <div className="card" style={{width: "18rem"}} >
                                        <li className="list-group-item">Country:{this.state.informationObj.country}</li>
                                        <li className="list-group-item">State:{this.state.informationObj.places[0].state}</li>
                                        {
                                        <li className="list-group-item">Place Name:{placesObj["place name"]}</li>                            
                                        }

                                </div>))
                            }

                        </div>
                        <div className='button-wrapper' style={{position:"absolute", left:"7vw"}}>
                            <button type="button" className="btn btn-danger" onClick={this.handleReset}>Reset</button>
                        </div>
                </div>

            }
      </>


    )
  }
}
