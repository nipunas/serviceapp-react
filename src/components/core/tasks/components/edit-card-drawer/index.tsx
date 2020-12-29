import React, { useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { updateCard, Card } from '../../../../../core/store/storeV2/cardsSlice';
import { unwrapResult } from '@reduxjs/toolkit';

interface ChildComponentProps {
  card?: Card;
}

const useStyles = makeStyles({
  list: {
    width: 550,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const EditCardDrawer : React.FC<ChildComponentProps> = (props) => {
  const classes = useStyles();
  const id = props.card?.id;
  const [title, setTitle] = useState(props.card?.title)
  const [description, setDescription] = useState(props.card?.description)
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const dispatch = useDispatch()
  const onTitleChanged = (e) => setTitle(e.target.value)
  const onDescriptionChanged = (e) => setDescription(e.target.value)
  const canSave = [title, description].every(Boolean) && addRequestStatus === 'idle'

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const closeDrawer = (anchor: Anchor, open: boolean) => {
    setState({ ...state, [anchor]: open });
  };

  const onSaveCardClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
            updateCard({ id, title, description})
        )
        unwrapResult(resultAction)
        setTitle('')
        setDescription('')
        closeDrawer('right', false)
      } catch (err) {
        console.error('Failed to save the card: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const addCardContent = (anchor: Anchor) => (
    <div className="container mt-3" style={{width: "600px"}}>
       <h2>Edit Card</h2>
      <form>
      <div className="form-group mt-3">
        <label htmlFor="postTitle">Card Title:</label>
          <input
            className="form-control" 
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
          />
      </div>
      <div className="form-group">
        <label htmlFor="postContent">Content:</label>
          <textarea
            className="form-control" 
            id="postContent"
            name="postContent"
            rows={12}
            value={description}
            onChange={onDescriptionChanged}
          />
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-primary" onClick={onSaveCardClicked} disabled={!canSave}>
            Save Card
          </button>
      </div>
      </form>
    </div>
  );

  return (
    <div>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained" color="primary" onClick={toggleDrawer(anchor, true)}>Edit</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {addCardContent(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default EditCardDrawer;