import React,{Component} from 'react';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import ChatStore from '../stores/ChatStore';

export default class Chat extends Component {
  render(){
    return (
      <div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChannelList {...this.props} />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }

  static willTransitionTo(transition){
    var state = ChatStore.getState();
    if(!state.user){
      transition.redirect('/login');
    }
  }
}
