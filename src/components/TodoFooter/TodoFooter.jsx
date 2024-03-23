import { Button } from "react-bootstrap";
import { DataContext } from "../../App";
import { useContext } from "react";

export default function TodoFooter() {
    const { state, dispatch } = useContext(DataContext);
    console.log();
    return (
        <div>
            <span>
                {state.filter(el => el.complited).length}/{state.length}{" "}
                Complited
            </span>
            <Button
                variant="outline-danger"
                className="m-1"
                onClick={() => {
                    dispatch({ type: "clearChacked" });
                }}
                title="Delete all chacked todos">
                🗑️ Clear Chacked
            </Button>
        </div>
    );
}
