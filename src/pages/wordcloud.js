import * as React from 'react';

import ReactWordCloud from 'react-wordcloud';

import {Comments} from './comments.js';

const rawWords = [
  'progreso',
  'mejora',
  'estancamiento',
  'importante',
  'trabajo',
  'ciudadania',
  'pais',
  'resurgimiento',
  'orgullo',
  'voluntad',
  'ciudad',
  'nacion',
  'patrimonio',
  'valor',
  'metales',
  'beneficio',
  'divisas',
  'motivo',
  'dolares',
  'exportando',
  'nivel',
  'apoyo',
  'congreso',
  'ley',
  'injusticia',
  'justo',
  'pueblo',
  'indigenas',
  'esperanza',
  'electoral',
  'presidente',
  'ministro',
  'colectivo',
  'fuerza',
  'imparcialidad',
  'libertad',
  'prensa',
  'sistema',
  'trafico',
  'influencias',
  'control',
  'asesor',
  'autoridad',
  'vizcarra',
  'ppk',
  'lima',
  'arequipa',
  'consecuencia',
  'decreto',
  'moral',
  'fujimori',
  'religion',
  'selva',
  'iquitos',
  'extranjero',
  'persona',
  'ancash',
  'loreto',
  'estados',
  'trabajadores',
  'proletario',
  'partido',
  'deporte',
  'medicos',
  'entretenimiento',
  'capadidad',
  'servicio',
  'basico',
];

const WORD_COUNT_KEY = 'value';
const WORD_KEY = 'word';

// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
    const index = window.location.href.substring(window.location.href.indexOf('index=') + 6);
    console.log(window.location.href);
    console.log(index);
    Math.seedrandom(index);
    const words = shuffle(rawWords.map(word => ({
      word,
      value: Math.floor(Math.random() * 100)
    }))).slice(20);
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
      <div style={{paddingLeft: "10em", width: 700, height: 600, display: "flex", alignItems: "center"}}>
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
