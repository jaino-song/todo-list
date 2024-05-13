import './App.css'
import Divider from './Divider/Divider'
import TodoHeader from './Header/TodoHeader'
import TodoList from './List/TodoList'
import TodoListTools from './Tools/TodoListTools'
import TodoInput from './input/TodoInput'
import TodoProvider from './Todo/TodoProvider'
import TodoListArea from './List/TodoListArea';

function App() {

  return (
    <main className='App'>
      <TodoProvider>
        {/* todos 배열에서 isChecked가 false인 요소만 필터링하여 count에 전달 */}
        <TodoHeader/>
        <TodoInput />
        <TodoListArea>
          <TodoListTools />
          <Divider />
          <TodoList />
        </TodoListArea>
      </TodoProvider>
    </main>
  )
}

export default App
