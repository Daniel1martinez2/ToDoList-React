import React, {useContext, useState} from 'react'; 
import TaskContext from '../store/task-context';
import classes from './NewTask.module.css'; 
const NewTask = props => {
  const taskCtx = useContext(TaskContext);
  const [inputValue, setInputValue] = useState(''); 
  const handleInputText = (event) => {
    setInputValue(event.target.value); 
  }
  const handleSubmitInput = (event) => {
    event.preventDefault();
    console.log(inputValue);
    taskCtx.addTask({title: inputValue, state: 'active', id: Math.random().toString()}); 
    console.log(taskCtx.list);
    setInputValue('');
  }
  return (
    <form onSubmit={handleSubmitInput} className={classes['todo__form']}>
      <button type="button" className={classes['select-all']} onClick={taskCtx.selectAll} >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
        </svg>
      </button>
      <input type="text" value={inputValue} className={classes['todo__input']} name="newTask" onChange={handleInputText} />
    </form>
  ); 
}
export default NewTask; 