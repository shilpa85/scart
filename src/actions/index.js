export const ADD_PROCESS = 'ADD_PROCESS'
export const REMOVE_PROCESS = 'REMOVE_PROCESS'
export const ADD_TO_STACK = 'ADD_TO_STACK'
export const POP_STACK = 'POP_STACK'
export const REMOVE_FROM_STACK = 'REMOVE_FROM_STACK'
export const SHOW_WARNING = 'SHOW_WARNING'
export const REMOVE_WARNING = 'REMOVE_WARNING'
export const CLEAR_STACK = 'CLEAR_STACK'
export const ADD_EVENT_CLICKED = 'ADD_EVENT_CLICKED'
export const ADD_PROCESS_CLICKED = 'ADD_PROCESS_CLICKED'
export const REMOVE_EVENT_CLICKED = 'REMOVE_EVENT_CLICKED'
export const REMOVE_PROCESS_CLICKED = 'REMOVE_PROCESS_CLICKED'
export const UPDATE_STACK = 'UPDATE_STACK'
export const SAVE_EVENT = 'SAVE_EVENT'
export const SAVE_STACK_DATA = 'SAVE_STACK_DATA'
export const CLEAR_CURRENT_STACK_DATA = 'CLEAR_CURRENT_STACK_DATA'
export const SAVE_PROCESS = 'SAVE_PROCESS'
export const BACKUP_STACK = 'BACKUP_STACK'
export const RESTORE_STACK = 'RESTORE_STACK'

export function actionSaveWorkSpace() {
  let store = require('../store/index')
  // //console.log('called')
  let state = store.default.getState()
  const currentType = state.stack[0].status
  const currentData = state.currentData

  if (currentType.endsWith('EVENT')) {
    // save EVENT
    return dispatch => {
      dispatch(actionSaveEvent(currentData))
    }
  } else if (currentType.endsWith('PROCESS')) {
    // //console.log('save process')
    return dispatch => {
      dispatch(actionSaveProcess(currentData))
    }
  }
}

export function actionUpdateStack(stack){
  return dispatch => {
      dispatch({ type: UPDATE_STACK, payload: stack })
    }
}

export function actionRestoreStack () {
  let store = require('../store/index')
  // //console.log('called')
  let state = store.default.getState()
  if(Object.entries(state.backup).length !== 0) {
    const stack = state.backup.stack
    const currentData = state.backup.currentData
    //console.log({ stack, currentData })
    return dispatch => {
      dispatch(actionSaveCurrentStackData(currentData))
      dispatch({ type: UPDATE_STACK, payload: stack })
      dispatch({ type: RESTORE_STACK })
    }
  } else {
    return dispatch => {
      dispatch({ type: RESTORE_STACK })
    }
  }
}

export function actionSaveProcess (process) {
  process['status'] = 'underReview'
  return dispatch => {
    dispatch({
      type: SAVE_PROCESS,
      payload: process
    })
  }
}

export function actionSaveCurrentStackData (data) {
  return dispatch => {
    dispatch({
      type: SAVE_STACK_DATA,
      payload: data
    })
  }
}

export function actionOpenAddEventFromProcess () {
  let store = require('../store/index')
  // //console.log('called')
  let state = store.default.getState()
  let stack = {
    stack: state.stack,
    currentData: state.currentData
  }
  return dispatch => {
    dispatch({
      type: BACKUP_STACK,
      payload: stack
    })
    dispatch(actionClearStack())
    dispatch(actionForceAddToStack({ status: 'ADD_EVENT', data: {} }))
  }
}

export function actionSaveEvent (event) {
  return dispatch => {
    dispatch({
      type: SAVE_EVENT,
      payload: event
    })
  }
}

export function actionShowWarning (ob) {
  return dispatch => {
    dispatch({ type: SHOW_WARNING, payload: ob })
  }
}

export function actionRemoveWarningWithoutSaving () {
  // //console.log('from actions')
  return dispatch => {
    dispatch({ type: REMOVE_WARNING })
  }
}

export function actionAddEventClicked () {
  let ob = {
    data: [],
    status: 'ADD_EVENT'
  }
  return dispatch => {
    dispatch(actionAddToStack(ob))
  }
  // //console.log('actionAddEventClicked')
}
export function actionAddProcessClicked () {
  let ob = {
    data: [],
    status: 'ADD_PROCESS'
  }
  return dispatch => {
    dispatch(actionAddToStack(ob))
  }
  // //console.log('actionAddProcessClicked')
}
export function actionRemoveEventClicked () {
  // //console.log('actionRemoveEventClicked')
}
export function actionRemoveProcessClicked () {
  // //console.log('actionAddProcessClicked')
}

export function actionshowPrimaryCloseWarning (ob) {
  return dispatch => {
    dispatch({
      type: SHOW_WARNING,
      payload: ob
    })
  }
}

export function actionSecondaryProcessClosed (index) {
  let store = require('../store/index')
  // //console.log('called')
  let state = store.default.getState()
  let newState = state.stack.filter((ob, i) => {
    if (i !== index) {
      return ob
    }
  })
  return dispatch => {
    dispatch({ type: UPDATE_STACK, payload: newState })
  }

  // const index = state.indexOf(opened);
  // //console.log(index)
}

export function actionPopStack () {
  return dispatch => {
    dispatch({
      type: POP_STACK
    })
  }
}
export function actionClearStack () {
  return dispatch => {
    dispatch({
      type: CLEAR_STACK
    })
    dispatch({
      type: CLEAR_CURRENT_STACK_DATA
    })
  }
}

export function actionForceAddToStack (ob) {
  return dispatch => {
    dispatch({
      type: ADD_TO_STACK,
      payload: ob
    })
  }
}

export function actionAddToStack (ob) {
  let store = require('../store/index')
  //console.log('called')
  let state = store.default.getState()
  if (state.stack.length === 0) {
    return dispatch => {
      dispatch({
        type: ADD_TO_STACK,
        payload: ob
      })
    }
  } else {
    return dispatch => {
      dispatch(actionShowWarning(ob))
    }
  }
  //console.log(state)
}

export function actionRemoveFromStack (ob) {
  //console.log('actionRemoveFromStack', ob)
  let store = require('../store/index')
  let state = store.default.getState()
  //console.log('actionRemoveFromStack, stack', state.stack)
  if (state.stack.length > 0) {
    return dispatch => {
      dispatch({
        type: REMOVE_FROM_STACK,
        payload: ob
      })
    }
  } else {
    //console.log('error removing from stack')
  }
  //console.log(state)
}
