import React from 'react'
class Search_id extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '123',
        };
    }
    onChange = (value) => {
        this.setState({ value });
    };
    render() {
        return (<div>
            <input id='input_id'
                // value={this.state.value}
                placeholder="手机号"
                onChange={this.onChange}
            />
            <i className='iconfont icon-sousuokuang'></i>
            <button onClick={() => document.getElementById('input_id').value = ''}>取消</button>
        </div>);
    }
}

export default Search_id;