import React/*, {useEffect}*/ from 'react';

export default function Grid() {
    // let change = 0;


    // useEffect(() => {
    //     createGrid()
    //     fillNumber()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    //create a fuction in js to create a grid with 90 boxes
    const createBoxes = (i) => {
        let boxgrid = []
        for (let j=0; j<10; j++){
            boxgrid.push( 
                <div className="col border text-center width-4" style={{"width": "2vw", "height": "6vh"}} key={i*10 + j + 1} id={i*10 + j + 1}>
                    { i*10 + j + 1}
                </div>
                );
        }
        return boxgrid;
    }
    const createGrid = () => {
        let rowgrid = []
        for (let i = 0; i < 9; i++) {
                rowgrid.push(
                <div className="row" key={i}>
                    {createBoxes(i)}
                </div>
                )
        }
        // rowgrid.push(
        //     <div className="row">
        //         <div className="col text-center border" style={{"width": "2vw", "height": "6vh"}} key={90} id={90}>
        //             {/* {90} */}
        //         </div>
        //     </div>
        // )
        return rowgrid;
    }

    // const fillNumber = (x) => {

    //     // console.log("x: ", x);
    //     let num = document.getElementById( x );

    //     console.log("num element value: ", num);
 
 
    //     if (num !== null){
    //         num.innerHTML = x;
    //     }
    //     else{
    //         console.log("null element: ", document.getElementById(x))
    //         if (change === 1){
    //             // setChange(0);
    //             change = 0;
    //         }
    //         else{
    //             // setChange(1);
    //             change = 1;
    //         }

            
    //         // document.getElementById(x).value = x 
    //     }
        
    // }

    //  const getNo = () => {

    //     for (let i = 1; i < 90; i++) {
    //         fillNumber(i+1);
    //         // setTimeout(5000);
    //     }
    //  }

    return (
        <div className="bg-secondary">
            {createGrid()}
            {/* {fillNumber(25)} */}
            {/* {getNo()} */}

        </div>
    )
}
