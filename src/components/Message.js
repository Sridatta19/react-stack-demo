import React,{Component} from 'react';
import {ListItem, Avatar} from 'material-ui';

class Message extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.message.profilePic} />}
      >{this.props.message.message}</ListItem>
    );
  }
}

export default Message;
