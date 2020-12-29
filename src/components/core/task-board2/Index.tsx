import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './index.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCards, selectCardIds } from '../../../core/store/storeV2/cardsSlice';

export const TaskBoard2 = () => {
    const todoItems = [
        { title: "Redux Store", description: "Implement redux store to add new tasks and all", profile: "https://images.pexels.com/users/avatars/82314/hampton-lamoureux-871.jpeg?w=256&h=256&fit=crop&auto=compress"},
        { title: "CQRS", description: "CQRS implementation needs to be done"},
        { title: "My Item", description: "tem description. Item description. Item description. Item description."},
        { title: "My Item", description: "Item description. Item description. Item description. Item description. Item description.", profile: "https://images.pexels.com/users/avatars/82314/hampton-lamoureux-871.jpeg?w=256&h=256&fit=crop&auto=compress"}
    ];

    const inProgressItems = [
        { title: "Create Task Board", description: "Design the task board with local storage implementation"},
        { title: "My Item 2", description: "Item description.n.", profile: "https://images.pexels.com/users/avatars/82314/hampton-lamoureux-871.jpeg?w=256&h=256&fit=crop&auto=compress"},
        { title: "My Item 2", description: "Item description. Item description. Item description. Item description. Item description."},
        { title: "My Item 2", description: "Item description. Item description.", profile: "https://images.pexels.com/users/avatars/82314/hampton-lamoureux-871.jpeg?w=256&h=256&fit=crop&auto=compress"},
        { title: "My Item", description: "Item description. Item description. Item description. Item description. Item description."}
    ]

    const doneItems = [
        { title: "Basic Design", description: "Complete the basic design", profile: "https://images.pexels.com/users/avatars/82314/hampton-lamoureux-871.jpeg?w=256&h=256&fit=crop&auto=compress"}
    ]

    const [todoList, setTodoList] = useState(todoItems);
    const [inProgressList, setInProgressItems] = useState(inProgressItems);
    const [doneList, setDoneItems] = useState(doneItems);

    const dispatch = useDispatch()
    const orderedCardIds = useSelector(selectCardIds)

    const cardStatus = useSelector((state) => state.cards.status)
    const error = useSelector((state) => state.cards.error)

    // useEffect(() => {
    //     dispatch(fetchCards())
    //   }, [cardStatus, dispatch]);

    //   let content

    // if (cardStatus === 'loading') {
    // content = <div className="loader">Loading...</div>
    // } else if (cardStatus === 'succeeded') {
    //     setTodoList(orderedCardIds);
    // } else if (cardStatus === 'failed') {
    //     content = <div>{error}</div>
    // }

    function generateCardList(list) {
        return list.map((localState, index) => (
            <div className="cardItem">
                <h6>{localState.title}</h6>
                <p>{localState.description.substring(0, 30)}...</p>
                <span>
                <img className="profile-photo" src={ localState.profile !== undefined ? localState.profile : "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}></img>
                <span>Nipuna Silva</span>
                </span>
            </div>
        ))
    }

    return (
        <div>
            <h2>Task Board 2</h2>
            <Container>
                <Row>
                    <Col>
                        <div className="cardList">
                            <h4>Todo</h4>
                            {generateCardList(todoList)}
                        </div>
                    </Col>
                    <Col>
                        <div className="cardList">
                        <h4>In Progress</h4>
                            {generateCardList(inProgressList)}
                        </div>
                    </Col>
                    <Col>
                        <div className="cardList">
                        <h4>QA</h4>
                            {generateCardList(doneList)}
                        </div>
                    </Col>
                    <Col>
                        <div className="cardList">
                        <h4>Done</h4>
                            {generateCardList(doneList)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}