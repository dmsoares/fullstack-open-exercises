import React from 'react'

const Notification = ({ message }) => {
    if (message === null) return null

    let notificationStyle = {}
    if (message.type === 'success') notificationStyle = { color: "green" }
    if (message.type === 'error') notificationStyle = { color: "red" }
    
    return (
        <div className='notification' style={notificationStyle}>
            {message.text}
        </div>
    )
}

export default Notification