import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    /*
    * render() 메서드 이전에 호출되며 렌더링을 생략할 수 있는 조건식을 리턴한다.
    * true이면(checked 값에 변동사항이 있다) render() 함수가 다시 호출된다
    * false이면(checked 값에 변동사항이 없다) render() 함수가 다시 호출되지 않는다.
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, myToggle, myRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => myToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    myRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
export default TodoItem;