import React,{Component} from 'react';
import {ListItem} from 'material-ui';
import Actions from '../actions';

export default class Channel extends Component{
  constructor(props){
    super(props);
  }

  onClick = () => {
    Actions.channelOpened(this.props.channel);
  }

  render(){
    let style = {};

    if(this.props.channel.selected){
      style.backgroundColor = '#f0f0f0';
    }
    return (
        <ListItem onClick={this.onClick}
        style={style}>{this.props.channel.name}</ListItem>
    );
  }
}
