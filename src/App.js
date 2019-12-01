import React ,{Component} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
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
    console.log('App render');
    var _title, _desc =null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode==='read'){
      var i=0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title= data.title;
          _desc= data.desc;
          break;
        }
        i=i+1;
      }
      //_title = this.state.contents[0].title;
      //_desc = this.state.contents[0].desc;
    }
    console.log('render',this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        {/* <header>
            <h1><a href="/" onClick={function(e){
             console.log(e);
             e.preventDefault();
             //this.state.mode='welcome';
             this.setState({
               mode:'welcome'              
             });//change value to React.. 
             //debugger;
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header> */}
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id :Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
