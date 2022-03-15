import axios from "axios"
import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"

export default function Characters(){

  const [ characters, setCharacters ] = useState([])
  const [ houses, setHouses ] = useState([])

  //hold the selected value for house
  const [ selected, setSelected ] = useState("All")

  const fetchCharacters = async () => {
    //fetching the characters
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/hp/characters")
    setCharacters(response.data)

    //fetching the houses for the selector
    const houseResponse = await axios.get("https://hp-assessment-api.herokuapp.com/hp/houses")
    setHouses(houseResponse.data)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  //based on the value selected, we decide which characters to show
  const displayCharacter = selected === "All" 
    ? characters 
    : characters.filter(char => char.houseId === parseInt(selected))
 
  return(
    <div>
      <h1>Characters Page</h1>
      {/* select field with options to filter by house */}
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="All" >All</option>
        {houses.map(house => (
        <option key={house.id} value={house.id}>{house.name}</option>))}
      </select>
      
      {!characters 
        ? "Loading" 
        : displayCharacter
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(char => (
          <CharacterCard 
            key={char.id}
            id={char.id}
            houseId={char.houseId}
            name={char.name} 
            born={char.born} 
            img={char.imgUrl} 
            house={char.house?.name}/>
        ))}
    </div>
  )
}