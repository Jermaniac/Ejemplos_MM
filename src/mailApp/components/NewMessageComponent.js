
export const NewMessageComponent = ({show, toggleShowSender}) => {

        return (
          <div>
            <button onClick={() => toggleShowSender()}>New message</button>
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