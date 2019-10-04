import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.scss'

export default function Dashboard({ history }) {
  const [spots, setSpots] = useState([])

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user')
      const response = await api.get('/dashboard', {
        headers: { user_id }
      })

      setSpots(response.data)
    }

    loadSpots()
  }, [spots])

  async function handleDelete(id) {
    await api.delete(`/spots/${id}`)
  }

  return (
    <>
      <ul className="spot-list">
        {spots.map((spot, index) => (
          <li key={index}>
            <button className="btn-danger" title="Excluir" onClick={() => handleDelete(spot._id)}>X</button>
            <Link to={`/new/${spot._id}`} title="Editar">
              <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            </Link>
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'Gratuito'}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">
          Cadastrar novo Spot
        </button>
      </Link>
    </>
  )
}