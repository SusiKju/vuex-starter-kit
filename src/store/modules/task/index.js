/* ============
 * Task Module
 * ============
 */

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  listTask: [],
  tasks: [],
  newTask: ''
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};