//style
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
}) => {
  return (
    <div className={openModal ? "modal-enable__div" : "modal-disable__div"}>
      <div className="quit__div">
        <button type="button" onClick={closeModal}>
          X
        </button>
      </div>
      <div className="head__div">
        {/* si list LIST OPTIONS si task TASK OPTIONS */}
        <h1>LIST OPTIONS</h1>
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
          />
        </div>
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
          <button type="submit" disabled={!itemTitle}>
            CREATE LIST
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodolistModal;
