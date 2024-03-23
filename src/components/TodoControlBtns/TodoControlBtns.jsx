import { useContext } from "react";
import { Button } from "react-bootstrap";
import { DataContext } from "../../App";

export default function TodoControlBtns() {
    const { dispatch } = useContext(DataContext);
    return (
        <div>
            <Button
                className="m-1"
                onClick={() => {
                    dispatch({
                        type: "chackAll",
                    });
                }}>
                Check all ✅
            </Button>
            <Button
                className="m-1"
                onClick={() => {
                    dispatch({
                        type: "unChackAll",
                    });
                }}>
                Uncheck all 🟩
            </Button>
        </div>
    );
}
