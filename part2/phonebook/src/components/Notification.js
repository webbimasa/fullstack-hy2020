/* eslint-disable react/prop-types */
import React from 'react'

const Notification = ({ notification }) => {
    const componentStyles = ( notification.style === 'warning'
        ? {
            color: '#ff4f00',
            fontWeight: 700,
            borderWidth: 4,
            borderColor: '#ff4f00',
            borderStyle: 'solid',
            paddingTop: 10,
            paddingRight: 18,
            paddingBottom: 10,
            paddingLeft: 18,
            marginTop: 10,
            marginRight: 18,
            marginBottom: 10,
            marginLeft: 18
        }
        : {
            color: '#07c562',
            fontWeight: 700,
            borderWidth: 4,
            borderColor: '#07c562',
            borderStyle: 'solid',
            paddingTop: 10,
            paddingRight: 18,
            paddingBottom: 10,
            paddingLeft: 18,
            marginTop: 10,
            marginRight: 18,
            marginBottom: 10,
            marginLeft: 18
        }
    )
    if (notification.message !== undefined) {
        return (
            <div style={componentStyles}>
                {notification.message}
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default Notification