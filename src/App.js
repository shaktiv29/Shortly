import React from 'react';
import axios from 'axios';
import Header from './Components/Header'
import Illustration from './Components/Illustration';
import Features from './Components/Features'
import Boost from './Components/Boost';
import Footer from './Components/Footer';
import {GlobalStyle, Inputing, InputContainer, InputUrl, Btn, GreyBackground, CopyButton, MiniContainer, Warning, HistoryUrls, OldLink, NewLink, LinkHistory, NewLinkk } from './styled/Appstyle.js';

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
      <GlobalStyle />
      <Header />
      <Illustration />
      <InputContainer>
      <GreyBackground></GreyBackground>
        <Inputing>
      <MiniContainer>
      <InputUrl id="inputurl" type="text" placeholder="Shorten a link here..." onChange={this.change} value={this.state.url}></InputUrl>
      <Warning>{this.state.puterror}</Warning>
      </MiniContainer>
      <Btn onClick={this.submit}>Shorten it</Btn><br/>
      </Inputing>
      <HistoryUrls>
        {
          this.props.data.map((x,i)=>{
              return <LinkHistory key={i}>
                <OldLink>
                  {x[0]}
                </OldLink>
                <NewLink>
                  <NewLinkk>{x[1]}</NewLinkk>
                <CopyButton id={i} onClick={()=>{this.copythelink(i)}}>Copy</CopyButton>
                </NewLink> 
                </LinkHistory>
          })
        }
      </HistoryUrls>
      <Features />
      <Boost />
      <Footer />
      </InputContainer>
    </div>
    
  );
}
}

App.defaultProps ={ data:[['https://google.com','https://shortly.com/sdifj']]}

export default App;
