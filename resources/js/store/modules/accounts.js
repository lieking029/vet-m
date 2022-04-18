import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
  row: []
}

// getters
export const getters = {
    row: state => state.row,
}

// mutations
export const mutations = {
    
    ['getRow'](state,row){
      state.row = row
    }
}

// actions
export const actions = {
   

}
