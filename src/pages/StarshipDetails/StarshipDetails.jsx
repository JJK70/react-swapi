import { useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";

const StarshipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()

  useEffect(()=> {
    const fetchDetails = async () => {
      const shipDetails = await getDetails(location.state.starship.url)
      setShipDetails(shipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div>
        {shipDetails.name ?
        <>
          <h1>{shipDetails.name}</h1>
          <h2>{shipDetails.model}</h2>
        </>
        :
        <>
          <p>Loading starship details...</p>
        </>
        }
      </div>
    </>
  )
}

export default StarshipDetails