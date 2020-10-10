import {Effect, Subscription} from 'dva';
import {Reducer} from 'redux';
// import {router} from 'umi';

export interface welcomeItem {
  name: string
  welcome: string
}

export interface welcomeType{
  namespace: 'welcome',
  state: welcomeItem,
  subscriptions: { setup: Subscription },
  effects: {
    queryWelcome: Effect;
  },
  reducers: {
    saveState: Reducer<welcomeItem>;
  },
}

const welcomeModal: welcomeType = {
  namespace: 'welcome',
  state: {
    name: 'zyk',
    welcome: 'welcome to my first project!'
  },
  subscriptions: {
    setup({dispatch, history}): void {
      history.listen((location): void => {
        if (location.pathname === '/welcome') {
          console.log("ヾ(o◕∀◕)ﾉヾ")
          console.log("ー(￣～￣)ξ")
          console.log("ヾ(。￣□￣)ﾂ゜゜゜")
        }
      });
    },
  },
  effects: {
    * queryWelcome({payload},{call,put}){
    }
  },
  reducers: {
    saveState(state,{payload}){
      return {
        ...state,
        ...payload
      };
    }
  }
}

export default welcomeModal
