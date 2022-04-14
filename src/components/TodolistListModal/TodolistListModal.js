//style
import "./todolistListModal.scss";

const TodolistListModal = ({
  listModal,
  closeListModal,
  handleCreateList,
  listTitle,
  setListTitle,
  listDescription,
  setListDescription,
}) => {
  return (
    <div className={listModal ? "modal-enable__div" : "modal-disable__div"}>
      <div className="quit__div">
        <button type="button" onClick={closeListModal}>
          X
        </button>
      </div>
      <div className="title__div">
        <h1>LIST OPTIONS</h1>
      </div>
      <form className="create-list__form" onSubmit={handleCreateList}>
        <div className="form-title__div">
          <h2>TITLE</h2>
          <input
            type="text"
            value={listTitle}
            onChange={(event) => {
              setListTitle(event.target.value);
            }}
          />
        </div>
        <div className="description__div">
          <input
            type="textarea"
            placeholder="Write a description..."
            value={listDescription}
            onChange={(event) => {
              setListDescription(event.target.value);
            }}
          />
        </div>
        <div className="buttons__div">
          <button type="button" onClick={closeListModal}>
            CANCEL
          </button>
          <button type="submit" disabled={!listTitle}>
            CREATE LIST
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodolistListModal;
