import React ,{Component} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

class App extends Component{
  constructor(props){ //test
    super(props);
    this.max_content_id=3;
    this.state = {
      mode:'welcome',
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
  getReadContent(){
    var i=0;
    console.log('!!!!!!'+this.state.selected_content_id);
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          return data
          break;
        }
        i=i+1;
      }
  }
  getContent(){
    var _title, _desc,_article =null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode==='read'){
      var _content = this.getReadContent();
      
      //_title = this.state.contents[0].title;
      //_desc = this.state.contents[0].desc;
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }else if (this.state.mode==='create'){
      _article=<CreateContent onSubmit={function(_title,_desc){
        //add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        // var newContents = Array.from(this.state.contents);
        // newContents.push({id:this.max_content_id,
        // title:_title, desc:_desc});
        this.setState({
          contents:_contents,
          mode :'read',
          selected_content_id:this.max_content_id
        });
        console.log(_title,_desc);
      }.bind(this)}></CreateContent>
    }else if (this.state.mode==='update'){
      _content = this.getReadContent();
      _article=<UpdateContent data={_content} onSubmit={
        function(_id,_title,_desc){
          var _contents= Array.from(this.state.contents);
          var i=0;
          // console.log("!!!!!!!!updatecontent1:"+_id);
          // console.log("!!!!!!!!updatecontent2:"+_title);
          // console.log("!!!!!!!!updatecontent3:"+_desc);
          while(i<_contents.length){
            if(_contents[i].id=== _id){
              _contents[i]={id:_id,title:_title, desc:_desc};
              break;
            }
            i=i+1;
          }

          this.setState({
            contents:_contents,
            mode:'read'
          });
          console.log(_title,_desc);
        }.bind(this)}></UpdateContent>
    }
    console.log('render',this);
    return _article;
  }
  render(){
    console.log('App render');
   
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
          <Control onChangeMode={function(_mode){
            if(_mode==='delete'){
              if(window.confirm('really?')){
                var _contents = Array.from(this.state.contents);
                var i =0;
                while(i<_contents.length){
                  if(_contents[i].id === this.state.selected_content_id){
                    _contents.splice(i,1);
                    break;
                  }
                  i=i+1;
                }
                this.setState({
                  mode:'welcome',
                  contents:_contents
                })
              }
            }else{
              this.setState({
                mode:_mode
              });
            }
          }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
