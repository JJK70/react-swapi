import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipPage = () => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  },[])

  return (
    <>
    <h3 class="header">Ships</h3>
    {starships.length ?
    <>
      {starships.map(starship =>
        <div class="starship" key={starship.index}>
          <Link class="App-link" to="/starship" state={{starship}}>{starship.name}</Link>
        </div>
      )}
    </>
    :
    <>
      <h4>Loading Starship details</h4>
    </>
    }
  </>

  )
}

export default StarshipPage