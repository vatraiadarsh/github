import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class react extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <h1>Hello world </h1>
            </>
        )
    }
}
