import { useState } from "react"

export default function AddBook(){

    const [formData, setFormData] = useState({
        title:'',
        author:'',
        publishedYear
    })
    const handleChange = (e) =>{
        setFormData(prev =>({
            ...prev,
            [e.name]:e.value
        }))
    }
    const handleSubmit =() =>{
      
    }
    return (
        <><h1>Add New Book</h1>
        <form action="submit">\
            <div>
                <label htmlFor="title"></label>
                <input onChange={handleChange} type="text" name="title" value={formData.title}/>
            </div>
            <div>
                <label htmlFor="author"></label>
                <input onChange={handleChange} type="text" name="author" value={formData.author}/>
            </div>
            <div>
                <label htmlFor="title"></label>
                <input onChange={handleChange} type="text" name="title" value={formData.title}/>
            </div>
        </form></>

    )
}