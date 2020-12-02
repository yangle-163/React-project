import React from 'react'
class Search_video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '321',
        };
    }
    onChange = (value) => {
        this.setState({ value });
    };
    render() {
        return (
        <div>
            <input id='input_video'
                // value={this.state.value}
                placeholder=""
                onChange={this.onChange}
            />
            <i className='iconfont icon-sousuokuang'></i>
            <button id='abolish' onClick={() => document.getElementById('input_video').value = ''}>取消</button>
        </div>);
    }
}

export default Search_video;