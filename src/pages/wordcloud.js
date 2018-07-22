import * as React from 'react';

import ReactWordCloud from 'react-wordcloud';

import {Comments} from './comments.js';

const words = [
  {word: 'progreso', value: 5},
  {word: 'mejora', value: 3},
  {word: 'estancamiento', value: 1},
  {word: 'importante', value: 3},
  {word: 'trabajo', value: 1},
  {word: 'ciudadania', value: 2},
  {word: 'pais', value: 3},
  {word: 'resurgimiento', value: 2},
  {word: 'orgullo', value: 3},
  {word: 'voluntad', value: 2},
  {word: 'ciudad', value: 2},
  {word: 'nacion', value: 2},
  {word: 'patrimonio', value: 1},
  {word: 'valor', value: 2},
];

const WORD_COUNT_KEY = 'value';
const WORD_KEY = 'word';

export class MyWordCloud extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      elemComment: [],
    };
  }

  setComment(text) {
    // if(text == "progreso"){
       this.setState({elemComment: <Comments />})
    // }
  }

  render () {
  return (
    <div class="container">
    <div class="row">
      <div class="col-sm-1">
      </div>
      <div class="col-sm-1">
      </div>
      <div class="col-sm-1">
      </div>
    <div class="col-sm-12">
      <div style={{width: 700, height: 600, justifyContent: "center", alignItems: "center"}}>
        <ReactWordCloud
        	words={words}
        	wordCountKey={WORD_COUNT_KEY}
        	wordKey={WORD_KEY}
          onWordClick={(ob) => this.setComment(ob.text)}
          maxAngle={0}
          minAngle={-90}
          orientations={2}
          fontFamily={"arial"}
          tooltipEnabled={0}
          transitionDuration={1200}
        />
      </div>
      <div>
        {this.state.elemComment}
      </div>
    </div>
    </div>
    </div>
  );
};
}

export default MyWordCloud;
