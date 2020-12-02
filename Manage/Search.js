import React from 'react'
class Search extends React.Component {
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
        return (
        <div>
            <input id='input'
                // value={this.state.value}
                placeholder=""
                onChange={this.onChange}
            />
            <i className='iconfont icon-sousuokuang'></i>
            <button id='abolish' onClick={() => document.getElementById('input').value = ''}>取消</button>
        </div>);
    }
}

export default Search;