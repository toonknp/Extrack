import React from 'react'
import './Card.css'
import { useState } from 'react';

export default function Card({card, onRemove}) {
    const [editState,setEditSate] = useState(false)
    const removeCard = () => {
        onRemove(card)
      }
    
    const edit = () => {
        setEditSate(true)
    }
    return (
        <div className='card'>
            <div className='card-head'>
                <p>{card.date}</p>
                <div>
                    <a onClick={removeCard}><img src='./assets/remove.png' alt="remove"/></a>
                   <a><img src='./assets/edit.png'  onClick={edit} alt="edit"/></a>
                </div>
            </div>
            <div class="card-body">
                <div className="card-detail">
                    <p>type: {card.type}</p>
                    <p>activity: {card.activity}</p>
                    <p>duration: {card.duration}</p>
                </div>
                <div className="card-text">
                    <p>{card.note}</p>
                </div>
            </div>
        </div>
    )
}