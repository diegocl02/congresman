import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
import './word.css';

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

      for (var i = 0; i < 10; i++) {

        let children = []

        children.push(
          <div class="row">
          <div class="col-sm-1">
          <div class="thumbnail">
            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></img>
          </div>
          </div>

          <div class="col-sm-5">
          <div class="panel panel-default">
          <div class="panel-heading">
          <strong>Anonimo</strong> <span class="text-muted">commentado hace 3 dias</span>
          </div>
          <div class="panel-body">
            {this.state.datacomment[i++].comments}
          </div>
          </div>
          </div>

          <div class="col-sm-1">
          <div class="thumbnail">
            <img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></img>
          </div>
          </div>

          <div class="col-sm-5">
          <div class="panel panel-default">
          <div class="panel-heading">
          <strong>Anonimo</strong> <span class="text-muted">commentado hace 3 dias</span>
          </div>
          <div class="panel-body">
            {this.state.datacomment[i].comments}
          </div>
          </div>
          </div>
        </div>
          )
        comments.push(children)
}

      return(
        <div class="container">
        <div class="row">
        <div class="col-sm-12">
          <h2>Comentarios:</h2>
          {comments}
        </div>
        </div>
        </div>
      )
    }
}
}
