import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    /*
    * render() 메서드 이전에 호출되며 렌더링을 생략할 수 있는 조건식을 리턴한다.
    * true이면(todos 배열의 값에 변동사항이 있다) render() 함수가 다시 호출된다
    * false이면(todos 배열의 값에 변동사항이 없다) render() 함수가 다시 호출되지 않는다.
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, myToggle, myRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (<TodoItem id={id} text={text} checked={checked}
                myToggle={myToggle} myRemove={myRemove} key={id} />)
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;
