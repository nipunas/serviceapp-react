import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCard } from '../../../../core/store/storeV2/cardsSlice'
import { unwrapResult } from '@reduxjs/toolkit'

export const AddCard = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onDescriptionChanged = (e) => setDescription(e.target.value)
    
    const canSave = [title, description].every(Boolean) && addRequestStatus === 'idle'

    const onSaveCardClicked = async () => {
        if (canSave) {
          try {
            setAddRequestStatus('pending')
            const resultAction = await dispatch(
              addNewCard({ title, description})
            )
            unwrapResult(resultAction)
            setTitle('')
            setDescription('')
            props.history.push('/tasks');
          } catch (err) {
            console.error('Failed to save the card: ', err)
          } finally {
            setAddRequestStatus('idle')
          }
        }
      }

    return (
        <section>
      <h2>Add Card</h2>
      <form>
        <label htmlFor="postTitle">Card Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={description}
          onChange={onDescriptionChanged}
        />
        <button type="button" onClick={onSaveCardClicked} disabled={!canSave}>
          Save Card
        </button>
      </form>
    </section>
    );

}
