import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { DataContext } from "../../../../App";

function TodoItem(todo) {
    const { dispatch } = useContext(DataContext);
    return (
        <Form>
            <Form.Check // prettier-ignore
                inline
                type="switch"
                id={todo.id}
                checked={todo.complited}
                onClick={() => {
                    dispatch({
                        type: "onChange",
                        payload: todo.id,
                    });
                }}
                label={todo.task}
            />
            {/* <span> </span> */}
            <Button
                variant="danger"
                className="m-1"
                onClick={() => {
                    dispatch({
                        type: "deleteItem",
                        payload: todo.id,
                    });
                }}
                title="🗑️ Delete todo">
                🗑️
            </Button>
        </Form>
    );
}
export default TodoItem;
