
export const CounterComponent = (props) => {

    const { getCounter, setCounter  } = props;

    return (
        <>
        <div>Counter Container</div>
        <div>
            Contador: {getCounter}
        </div>
        <button onClick={ () => setCounter(getCounter+1)}>
            +
        </button>
        <button onClick={ () => setCounter(getCounter-1)}>
            -
        </button>
        </>
    );
    
}