
import React from 'react'
import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DragAndDropContainer1 } from './Container'

export function DndContainer() {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <DragAndDropContainer1 />
            </DndProvider>
        </div>
    )
}

