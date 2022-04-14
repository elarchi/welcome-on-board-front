//style
import "./todolistTaskModal.scss";

const TodolistTaskModal = ({
  taskModal,
  closeTaskModal,
  handleCreateTask,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  setIsImportant,
}) => {
  return (
    <div
      className={
        taskModal ? "task-modal-enable__div" : "task-modal-disable__div"
      }
    >
      <div className="quit__div">
        <button type="button" onClick={closeTaskModal}>
          X
        </button>
      </div>
      <div className="title__div">
        <h1>TASK OPTIONS</h1>
      </div>
      <form className="create-task__form" onSubmit={handleCreateTask}>
        <div className="form-title__div">
          <h2>TITLE</h2>
          <input
            type="text"
            value={taskTitle}
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
          />
        </div>
        <div className="importance__div">
          <h2>Important?</h2>
          <div className="buttons__div">
            <input
              type="radio"
              name="importance"
              id="YES"
              onClick={() => {
                setIsImportant(true);
              }}
            />
            <label for="YES">YES</label>
            <input
              type="radio"
              name="importance"
              id="NO"
              onClick={() => {
                setIsImportant(false);
              }}
            />
            <label for="NO">NO</label>
          </div>
        </div>
        <div className="description__div">
          <input
            type="textarea"
            placeholder="Write a description..."
            value={taskDescription}
            onChange={(event) => {
              setTaskDescription(event.target.value);
            }}
          />
        </div>
        <div className="buttons__div">
          <button type="button" onClick={closeTaskModal}>
            CANCEL
          </button>
          <button type="submit" disabled={!taskTitle}>
            CREATE TASK
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodolistTaskModal;