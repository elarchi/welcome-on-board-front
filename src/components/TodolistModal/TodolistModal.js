//STYLE
import "./todolistModal.scss";

const TodolistModal = ({
  whichItem,
  openModal,
  closeModal,
  handleCreateItem,
  itemTitle,
  setItemTitle,
  itemDescription,
  setItemDescription,
  isImportantTask,
  setIsImportantTask,
}) => {
  return (
    <div className={openModal ? "modal-enable__div" : "modal-disable__div"}>
      <div className="quit__div">
        <button type="button" onClick={closeModal}>
          X
        </button>
      </div>
      <div className="head__div">
        {whichItem === "list" ? <h1>LIST OPTIONS</h1> : <h1>TASK OPTIONS</h1>}
      </div>
      <form className="main__form" onSubmit={handleCreateItem}>
        <div className="form-title__div">
          <h2>TITLE</h2>
          <input
            type="text"
            value={itemTitle}
            onChange={(event) => {
              setItemTitle(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleCreateItem();
              }
            }}
          />
        </div>
        {whichItem === "task" ? (
          <div className="importance__div">
            <h2>Important?</h2>
            <div className="buttons__div">
              <input
                type="checkbox"
                name="importance"
                onClick={() => {
                  if (isImportantTask) {
                    setIsImportantTask(false);
                  } else {
                    setIsImportantTask(true);
                  }
                }}
              />
              <label for="YES">YES</label>
            </div>
          </div>
        ) : null}

        <div className="description__div">
          <input
            type="textarea"
            placeholder="Write a description..."
            value={itemDescription}
            onChange={(event) => {
              setItemDescription(event.target.value);
            }}
          />
        </div>
        <div className="buttons__div">
          <button type="button" onClick={closeModal}>
            CANCEL
          </button>
          {whichItem === "task" ? (
            <button type="submit" disabled={!itemTitle}>
              CREATE TASK
            </button>
          ) : (
            <button type="submit" disabled={!itemTitle}>
              CREATE LIST
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodolistModal;
