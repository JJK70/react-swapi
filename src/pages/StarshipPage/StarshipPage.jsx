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
    <h3>Ships</h3>
    {starships.length ?
    <>
      {starships.map(starship =>
        <div key={starship.index}>
          <Link to="/starship" state={{starship}}>{starship.name}</Link>
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