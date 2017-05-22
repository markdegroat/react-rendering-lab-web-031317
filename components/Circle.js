import React from 'react';

export default class Circle extends React.Component {

  shouldComponentUpdate(nextProps){
    if(this.props.color != nextProps.color){
      return true
    }else{
      return false
    }
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }

}
