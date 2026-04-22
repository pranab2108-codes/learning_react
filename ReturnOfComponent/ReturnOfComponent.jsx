function ReturnOfComponent() {                                          /* In React the component always return a XML. */

    return (

        <Header title="My first name is Pranab"></Header>

    );
                                                                        /* If there will be more than one line inside of return then it should be wrap inside of one parent, like "<div>....</div>" or "<>...</>". */        
    // return (

    //     <Header title="My first name is Pranab"></Header>
    //     <Header title="My last name is Sethi"></Header>

    // );
                                                                        /* OR */
    return(

        <>
         
        <Header title="My first name is Pranab"></Header>
        <Header title="My last name is Sethi"></Header>

        </>

    );
                                                                        /* OR */
    return(

        <div>
         
        <Header title="My first name is Pranab"></Header>
        <Header title="My last name is Sethi"></Header>

        </div>

    );
                                                                        /* Although the first valid return will only run because one function can return one statement, after that whatever the lines will be present below the return will never execute. */
}

function Header({title}){                                               /* Here title is act as props, this is called as destructuring. */

    return <div>

        {title}

    </div>

}

export default ReturnOfComponent;


// import { StrictMode } from 'react'                                   /* It should be done in src/main.jsx, because React starts from main.jsx which is inside of the src folder. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ReturnOfComponent from '../ReturnOfComponent/ReturnOfComponent.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <ReturnOfComponent />
    
// );