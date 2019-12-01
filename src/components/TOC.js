import React from 'react';
import {Component} from 'react';

class TOC extends Component {
    render(){
        var lists =[];
        let data =this.props.data;
        var i=0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    data-id = {data[i].id}
                    onClick={function(e){                        
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >{data[i].title}</a>
            </li>);
            i=i+1;
        }
        return (
            <nav>
            <li><a href="http://google.com">google</a></li>
            {lists}
        </nav>      
        );
    }
  }
  
export default TOC;