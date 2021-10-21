import React from 'react'

export default function Bar() {
    let done = []
    
    const randomNum = () => {
        let num = Math.floor((Math.random() * 90) + 1);
        done.push(num)
        console.log(done);
        return num;
    }


    return (
        <div className="bg-dark text-white text-center " style={{"height": "32vh"}}>
            <h1>Bar</h1>
            <br />
            <br />
            <div>
                <h1>{randomNum()}</h1>
            </div>
        </div>
    )
}
