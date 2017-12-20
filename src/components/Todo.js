import React from 'react'
import PropTypes from 'prop-types'

// const Todo = ({ onClick, completed, text }) => (
//     <li
//         onClick={onClick}
//         style={{
//             textDecoration: completed ? 'line-through' : 'none'
//         }}
//     >
//         {text}
//     </li>
// )

// Todo.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
// }

class Todo extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        let onClick = this.props.onClick;
        let completed = this.props.completed;
        let text = this.props.text;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </li>
        );
    }
}

export default Todo