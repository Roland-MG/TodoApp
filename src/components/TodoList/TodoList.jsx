import { useContext } from "react";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import { DataContext } from "../../App.jsx";
import { Card, ListGroup } from "react-bootstrap";

function TodoList() {
    const { state } = useContext(DataContext);
    // console.log(typeof state);

    // console.log(state);
    return (
        <Card bg="danger" className="bg-dark text-white">
            <ListGroup variant="flush">
                {state.map((todo, index) => (
                    <ListGroup.Item key={index} action variant="dark">
                        <TodoItem key={index} {...todo} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
}
export default TodoList;
