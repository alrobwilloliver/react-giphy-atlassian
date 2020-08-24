import React, { Component } from 'react';

class Gif extends Component {

    render() {
        const src = "https://media2.giphy.com/media/cJSDRt8csBx0A7YFfh/100.gif?cid=ecf05e47119c299ad99b28827cc6c24289dc467aecdafdf5&rid=100.gif"
        return (
            <img src={src} alt="" className="gif" />
        )
    }
}

export default Gif;