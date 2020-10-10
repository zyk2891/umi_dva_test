import React from 'react'
import styles from './index.less'
import {Table, Input, Button} from 'antd'
import { connect } from "dva";
import {AnyAction, Dispatch} from 'redux';
import {welcomeItem} from '@/models/welcome/welcome';
import {Loading} from "@@/plugin-dva/connect";

interface welcomeProps {
  welcome:welcomeItem
  dispatch: Dispatch<AnyAction>
  loading: Loading
}

interface welcomeStates {
  name?: string
  welcome?: string
}

class Welcome extends React.Component<welcomeProps,welcomeStates> {
  constructor(props:welcomeProps) {
    super(props);
    this.state = {
      name: this.props.welcome.name,
      welcome: this.props.welcome.welcome,
    }
    this.clickThis = this.clickThis.bind(this);
  }

  clickThis(){
    const { dispatch } = this.props;
    dispatch({
      type: 'welcome/saveState',
      payload: {
        name: this.state.name,
        welcome: this.state.welcome,
      }
    })
  }

  valueChange(e:any){
    console.log(e.target.value);
    this.setState({
      name: '123',
      welcome: '123'
    })
  }

  render() {
    return (
      <div className={styles.main}>
        <Input placeholder={this.state.name} value={this.state.name} onChange={(e)=>{this.valueChange(e)}}/>
        <Input placeholder={this.state.welcome} value={this.state.welcome} onChange={(e)=>{this.valueChange(e)}}/>
        <Button onClick={this.clickThis} type="primary">click this</Button>
        <Table/>
      </div>
    )
  }
}

export default connect(({welcome,loading})=>({
  welcome,
  loading
}))(Welcome)
