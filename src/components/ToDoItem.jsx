import "./ToDoItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ToDoItem(props) {

  function onClickDelete(_event) {
    props.onDelete(props.title);
  }

  function onCompleteClick(_event){
    props.onComplete(props.title);
  }

  return (
    <div className="todo-item">
      <div className="todo-title">{props.title}</div>
      <div className="icons-group">
        {!props.isCompleted && <div className="todo-delete" onClick={onCompleteClick}>
          <CheckCircleOutlineIcon />
        </div>}
        <div className="todo-delete" onClick={onClickDelete}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}
