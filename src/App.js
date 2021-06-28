import './styles/App.css';
import React from 'react';
import axios from 'axios';
import Header from './Components/Header'
import Illustration from './Components/Illustration';
import Features from './Components/Features'
import Boost from './Components/Boost';
import Footer from './Components/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      url: "",
      puterror:" "
    }
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
    this.copythelink = this.copythelink.bind(this)
    this.errorvisible = this.errorvisible.bind(this)
    this.errorinvisible = this.errorinvisible.bind(this)
  }
  errorvisible(){
    let x = document.getElementById('inputurl')
    x.style.borderColor = "red"
  }
  errorinvisible(){
    let x = document.getElementById('inputurl')
    x.style.borderColor = "grey"
  }
  change(e){
    this.setState({
      url: e.target.value,
      puterror: " "
    })
    this.errorinvisible()
  }
  async submit(){
    if(this.state.url===""){
      this.setState({
        puterror: "Please add a link"
      })
      this.errorvisible()
      return
    }
    try{
    
    const short_link_data = await axios.get('https://api.shrtco.de/v2/shorten?url='+this.state.url)
    if(short_link_data.data.result.full_short_link===""){
      alert("Enter a valid link")
      return
    }
    this.props.data.push([this.state.url,short_link_data.data.result.full_short_link])
    this.setState({
      url:"",
      puterror:" "
    })
    }
    catch(e){
      alert(e)
    }
    
  }
  copythelink(index){
    navigator.clipboard.writeText(this.props.data[index][1])
    for(let i=0;i<this.props.data.length;i++){
      if(i===index){
        const ele = document.getElementById(i)
        ele.innerHTML = "Copied!"
      }
      else{
        const ele = document.getElementById(i)
        ele.innerHTML = "Copy" 
      }
    }
  }
  render(){
  return (
    <div className="App">
      <Header />
      <Illustration />
      <div id="input-container">
      <div id="grey-background"></div>
        <span id="inputing">
      <span id="minicontainer">
      <input id="inputurl" type="text" placeholder="Shorten a link here..." onChange={this.change} value={this.state.url}></input>
      <div id="warning">{this.state.puterror}</div>
      </span>
      <button id="submit" onClick={this.submit} className="btn">Shorten it</button><br/>
      </span>
      <div id="history-urls">
        {
          this.props.data.map((x,i)=>{
              return <div className="link-history" key={i}>
                <span className="old-link">
                  {x[0]}
                </span>
                <span className="new-link">
                  <span className="infoss">{x[1]}</span>
                <button className="copy-button btn" id={i} onClick={()=>{this.copythelink(i)}}>Copy</button>
                </span> 
                </div>
          })
        }
      </div>
      <Features />
      <Boost />
      <Footer />
      </div>
    </div>
  );
}
}

App.defaultProps ={ data:[["https://google.com","https://shrtco.de/61MVUb"],["https://yahoo.com","https://shrtco.de/iQkbC"]]}

export default App;
