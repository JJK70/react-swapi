import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

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
      <div>
        <h3>STAR WARS STARSHIPS</h3>
        <div starshipName='icon-container'>
          {starships.map(starship =>
          <Link key={starship.name} to='/starship' state={{starship}} >
            <div className="ship-div">
              {starship.name}
            </div>
          </Link>)}
        </div>
      </div>
    </>
  )
}

export default StarshipPage