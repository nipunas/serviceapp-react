import { FormControl, InputLabel, Select } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCards, selectCardIds } from '../../../../core/store/storeV2/cardsSlice'
import AddCardDrawer from '../components/add-card-drawer'
import { CardExcerpt } from './card-excerpt'
import { ListFilter } from './list-filter'


export const TasksList = () => {
  const dispatch = useDispatch()
  const orderedCardIds = useSelector(selectCardIds);
  const [listFilter, setListFilter] = React.useState(1);

  const cardStatus = useSelector((state) => state.cards.status)
  const error = useSelector((state) => state.cards.error)

  useEffect(() => {
    if (cardStatus === 'idle') {
      dispatch(fetchCards())
    }
  }, [cardStatus, dispatch])

  let content

  if (cardStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (cardStatus === 'succeeded') {
    content = orderedCardIds.map((id) => (
      <CardExcerpt key={id} id={id} />
    ))
  } else if (cardStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <div className="col-md-12">
      <h2>Cards</h2>
      <ListFilter onFilterChange={setListFilter} listFilter={listFilter} />
      <AddCardDrawer />
      <div className="mt-3">
        <Row>
          {content}
        </Row>
      </div>
    </div>
  )
}
