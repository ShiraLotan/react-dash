import { constants } from '../consts';

const initialState = {
  widgets: [
    {name: 'First Widget', value: 33},
    {name: 'Second Widget', value: 46}
    ]
}

export const widgetReducer = (state=initialState, action) =>{
  console.log(state)
  switch(action.type){
    case constants.getWidget:
      return state.widgets;
  }
}