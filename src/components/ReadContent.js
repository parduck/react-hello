import React,{Component} from 'react';

class ReadContent extends Component{
    render(){
        console.log('Content render');
        return (
            <article >
                <h1>{this.props.title}</h1>
                {this.props.desc}
            </article>
        );
    }
}
  
export default ReadContent;