
export const Content = ({name, age, gender}) => {
    if ( gender === "Male") {
        return (
        <div className="my-10 bg-blue-500">
             <div>Name : {name}</div>
             <div>Age : {age}</div>
             <div>Gender : {gender}</div>
             </div>
        )
    }


return (
    <div className="my-10 bg-red-500">
        <div>Name : {name}</div>
        <div>Age : {age}</div>
        <div>Gender : {gender}</div>
    </div>
  )
}
