export function reducer(currentState, action) {
  const nextstate = { ...currentState };
  switch (action.type) {
    case 'SET_PROJECT':
      const { data } = action.payload
      nextstate.dataProjects = data
      return nextstate
    case 'CHANGE_LIFE':
      const { change, playername } = action.payload;
      nextstate.players.find(p => p.name == playername).life += change;
      return nextstate;
    case 'SET_WINNER':
      const namewinner = action.payload.playername;
      var useridwinner;
      for (var p of nextstate.players) {
        p.life = 20;
        p.tokens = [];
        p.turn = !p.turn;
        if (p.name === namewinner) {
          p.wins += 1;
          useridwinner = p.userid;
          if (p.wins == nextstate.gametype) {
            updateWins(useridwinner);
            nextstate.someonewon = p.name;
          }
        }
      }
      return nextstate;
    case 'SET_TURN':
      const { gametype, color1, color2 } = action.payload;
      const ran = getRandomInteger(0, 1);
      nextstate.players[ran].turn = true;
      nextstate.gametype = gametype;
      nextstate.players[0].color = color1;
      nextstate.players[0].wins = 0;
      nextstate.players[1].color = color2;
      nextstate.players[1].wins = 0;
      nextstate.someonewon = false;
      return nextstate;
    case 'ADD_TOKEN':
      const { counter, counterid, tokentype } = action.payload;
      const player2add = action.payload.playername;
      nextstate.players.find(p => p.name == player2add).tokens[counterid] =
        {
          tokenid: counterid,
          tokencounter: counter,
          tokentype: tokentype,
        };

      return nextstate;
    case 'CHANGE_TOKEN_COUNTER':
      const playernamE = action.payload.playername;
      const counteriD = action.payload.counterid;
      const changE = action.payload.change;
      nextstate.players.find(p => p.name == playernamE).tokens[counteriD].tokencounter += changE;
      return nextstate;
    case 'REMOVE_TOKEN':
      const playernamEE = action.payload.playername;
      const tokenid = action.payload.tokenid;
      nextstate.players.find(p => p.name == playernamEE).tokens.splice(tokenid, 1);
      return nextstate;
    default:
      return currentState;

  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateWins(userid) {
  var AjaxPromise = require('ajax-promise');
  AjaxPromise
    .post('/updatewins', { userid: userid })
    .then(function (response) {
      console.log("winupdated");
    })
    .catch(function (err) {
      console.log('errors in response', err);
    })
}

function getProjectList() {
  var AjaxPromise = require('ajax-promise');
  AjaxPromise
    .get('/getinitialstate')
    .then(function (response) {
      return response
    })
    .catch((err) => console.log("Something went wrong when trying to get project details"))
}
