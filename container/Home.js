import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {now} from '../action/HomeAction'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      this.props.now();
    }

    handleButtonClick(e) {
        this.props.now();
    }

    render() {
        const {timestamp} = this.props;
        return (
            <div>
                <div>{timestamp}</div>
                <button onClick={(e) => {this.handleButtonClick(e)}}>测试</button>

            </div>
        )
    }
}

export default connect((state) => {
    return Object.assign({}, state.home)
}, dispatch => {
    return {
        now: bindActionCreators(now, dispatch)
    }
})(Home)
