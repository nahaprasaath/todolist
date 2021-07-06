// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react'
import styled from 'styled-components'
import dataset from './dataset'
import Column from './column.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    display : flex;
`

const App = () => {
  const [data, setData] = useState(dataset)

  const onDragEnd = result => {}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {data.columnOrder.map((id, index) => {
              const column = data.columns[id]
              const ts = column.tIds.map(tId => data.ts[tId])

              return <Column key={column.id} column={column} ts={ts} index={index} />
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  )
}
export default App;