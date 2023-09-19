import React, { Component } from 'react';

class ToolBadge extends Component {
  render() {
    const { text, background, slug, color } = this.props.item;
    const { overrideBg } = this.props;

    const URL = `https://img.shields.io/badge/${text}-${overrideBg? overrideBg : background}?style=for-the-badge&logo=${slug}&logoColor=${color}`;

    return <img className="tool-badge" src={URL} alt=""></img>
  }
}
 
export default ToolBadge;