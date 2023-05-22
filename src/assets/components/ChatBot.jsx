import React from "react";
import { Launcher } from 'react-chat-window'
class ChatBot extends React.Component {
    constructor(props) {
        super(props);
this.state = {
            messageList: [],
        }
}
async _onMessageWasSent(message) {
        await this.setState({
            messageList: [...this.state.messageList, message]
        })
    }
_sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                },]
            })
        }
    }
    
render() {
return (
            <div id="chatbox" className="chatbox">
                <Launcher
                    agentProfile={{
                        teamName: 'ZenitsuBot',
                        imageUrl: 'https://i.ibb.co/7QDhT8t/zenitsu-1.jpg'
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    showEmoji
                />
            </div>
        );
    }
}
export default ChatBot;