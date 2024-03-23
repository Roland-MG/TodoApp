import { useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { DataContext } from "../../App";
import { useState } from "react";

function TodoAddForm() {
    const { dispatch } = useContext(DataContext);
    const [value, setValue] = useState("");
    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                dispatch({
                    type: "add",
                    payload: {
                        task: value,
                    },
                });
                setValue("");
            }}
            name="todo_add_form">
            <InputGroup className="mb-3 text-bg-dark">
                <Form.Control
                    inline
                    type="text"
                    placeholder="Enter Task"
                    value={value}
                    onChange={e => {
                        setValue(e.target.value);
                    }}
                    name="task"
                />
                <Button variant="success" type="submit">
                    Add
                </Button>
            </InputGroup>
        </Form>
    );
}
export default TodoAddForm;
