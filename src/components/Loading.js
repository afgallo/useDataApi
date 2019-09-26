import React from 'react'
import './Loading.css'

export default ({ message = 'Loading' }) => (
  <p className="loading">
    {message}
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </p>
)
