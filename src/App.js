
function App(){
    const number = 1;

    const double = (number) => {
            return number *2;
    };
    double();
    return(
            <>
                     <div>{double(number)}</div>
                    <button>Submit</button>
            </>
             
        
     
    );
}

export default App;
