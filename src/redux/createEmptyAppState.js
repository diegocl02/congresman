let initialstate = {
  dataProjects: undefined
}

function getProjectList(state){
    var AjaxPromise = require('ajax-promise');
    AjaxPromise
    .get('/getinitialstate')
    .then(function (response) {
      console.log("response", response)
      state.dataProjects = response
    })
    .catch((err) => console.log("Something went wrong when trying to get project details"))
}

export function createEmptyAppState(){
  return initialstate;
}
