
//const let and var
export function changeLife(change, playername) {
  return {
    type: 'CHANGE_LIFE',
    payload: {
      change,
      playername
    }
  };
}
// Get Projects
export function setProjectData(data) {
  return {
    type: 'SET_PROJECT',
    payload: {
      data
    }
  };
}

//just need the winner player to give him a win+1
export function setWinner(playername) {
  return {
    type: 'SET_WINNER',
    payload: {
      playername
    }
  };
}

// to chose starting player randomly
export function setTurn(gametype, color1, color2) {
  return {
    type: 'SET_TURN',
    payload: {
      gametype, color1, color2
    }
  };
}

// to ADD Token for a player
export function addToken(playername, counter, counterid, tokentype) {
  return {
    type: 'ADD_TOKEN',
    payload: {
      playername,
      counter,
      counterid,
      tokentype
    }
  };
}

// change counter
export function changeTokenCounter(playername, counterid, change) {
  return {
    type: 'CHANGE_TOKEN_COUNTER',
    payload: {
      playername,
      change,
      counterid
    }
  };
}

// remove token
export function removeToken(playername, tokenid) {
  return {
    type: 'REMOVE_TOKEN',
    payload: {
      playername,
      tokenid
    }
  };
}
