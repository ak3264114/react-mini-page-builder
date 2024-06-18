import React from 'react'
import { AppstoreOutlined } from '@ant-design/icons';

function DragItem({name, draggable, onDragStart}) {
    return (
        <div
            onDragStart={(e) => onDragStart(e,name)} 
            draggable={draggable} 
            style={{backgroundColor: '#FFFFFF', padding: '10px', margin: '10px 15px', fontFamily: 'Arial', fontWeight: '300', borderRadius: '4px'}}>
                <div className="inline">
                <AppstoreOutlined style={{ marginRight: 8, color: '#D4D4D4' }} />
                </div>
            {name}
        </div>
    )
} 

export default DragItem
