import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';

export class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datacomment: undefined,
    };
  }

  componentDidMount() {
      if (this.state.datacomment === undefined) {
          var AjaxPromise = require('ajax-promise');
          AjaxPromise
              .get('/getpoll')
              .then((response) => {
                  this.setState({
                      datacomment: response,
                  })
              })
      }
  }

  render() {

    if (this.state.datacomment === undefined) {
        return (
            <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <RingLoader />
            </div>
        )
    } else {
      let comments = []

      for (var i = 0; i < 5; i++) {

        let children = []

        children.push(<div><p><strong>{"Anonimo:"}</strong></p><p>{this.state.datacomment[i].comments}</p></div>)

        comments.push(children)
}

      return(
        <div className="comment">
          <h2>Comentarios:</h2>
          {comments}
        </div>
      )
    }
}
}
