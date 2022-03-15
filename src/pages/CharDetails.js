import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CommentsForm from "../components/CommentsForm"

export default function CharDetails(){

  const [ character, setCharacter ] = useState({})

  //getting the id from the params
  const params = useParams()

  const fetchCharacter = async () => {
    //replace the :id with the actual id (params.characterId)
    const response = await axios.get(`https://hp-assessment-api.herokuapp.com/hp/character/${params.characterId}`)
    console.log("res", response)
    setCharacter(response.data)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  return(
    <div>
      {/* we don't map because one character is an object, not an array */}
      <h1>{character.name}</h1>
      <img src={character.imgUrl}/>
      <p><b>Born in:</b> {character.born}, {character.species}, {character.blood}</p>
      <p><b>Patronus:</b> {character.patronus}</p>
      <p><b>Hogwarts House:</b> {character.house?.name}</p>
      <p><b>Quote:</b> "{character.quote}"</p>
      <CommentsForm/>
    </div>
  )
}