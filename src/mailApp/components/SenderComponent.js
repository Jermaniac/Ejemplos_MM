
export const SenderComponent = ({show, onClose}) => {

        return (
          <div>
            <button onClick={() => onClose()}>Send an email</button>
            {show && (
              <>
                  <form>
                    <label>
                      Title:
                      <input type="text" name="title" />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
              </>
            )}
          </div>
        );


}