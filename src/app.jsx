import React from 'react'
import placeholder from './mddata'
import RenderDangerousHtml from './renderdangeroushtml'
import Editor from './editor'
import './app.css'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div className="app">
      <h1>Markdown Previewer</h1>
      <Editor markdown={this.state.markdown} onChange={this.handleChange}/>  
      <RenderDangerousHtml  markdown={this.state.markdown} />
      </div>
    )
  }
}