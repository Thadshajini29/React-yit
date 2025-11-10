// function Myname({ name }) {
//     return (
//         <div>
//             <h1>Welcome React Page {name}</h1>
//         </div>
//     );
// }
// export default Myname;

function Myname(Props) {
    return (
        <div>
            <b>First Name</b><i>{Props.fname}</i>
            <b>Last Name</b><i>{Props.lname}</i>
        </div>


    );
}
export default Myname;

