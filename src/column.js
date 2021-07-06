import React from 'react'
import styled from 'styled-components'
import Task from './task.js'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width:220px;
    display:flex;
    flex-direction: column;
    background-color:#f25f24;
`;
const Title = styled.h3`
    padding: 8px
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? '#f25f24' : 'inherit')};
    min-height:100px;
`;

function Column(props) {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                    <Droppable droppableId={props.column.id} type='t'>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.ts.map((t, index) => <Task key={t.id} task={t} index={index} />)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
    )
}

export default Column