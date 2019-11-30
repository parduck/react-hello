import React ,{Component} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'Web',sub:'world wide web!'},
      welcome:{title:'welcome',desc:'Hello react...'},
      contents:[
        {id:1, title:'HTML', desc:'html is hyper text..'},
        {id:2, title:'CSS', desc:'CSS is CSS..'},
        {id:3, title:'React', desc:'React is React..'}
      ]
    }
  }
  render(){
    if(this.state.mode==='welcome')
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="html" desc="html is markup language."></Content>
      </div>
    );
  }
}

export default App;
