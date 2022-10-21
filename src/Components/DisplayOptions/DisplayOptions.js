import React from 'react';
import Swal from 'sweetalert2'

const DisplayOptions = (option) => {

    const handleClick = () =>{
        if(option.option === option.correctAnswer){
            Swal.fire(
                'Good job',
                'Answer is correct!'
            )
        }
        else{
            Swal.fire(
                'SORRY',
                'Answer is Wrong!!'
            )
        }
    }
    return (  
        <div className='border-4 m-2'>
            <button onClick={handleClick}>
                
                <ul className='list-disc list-inside'><li>{option.option}</li></ul></button>
        </div>
    );
};

export default DisplayOptions;