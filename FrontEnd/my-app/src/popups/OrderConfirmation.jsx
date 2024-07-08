import React from 'react'
import {useNavigate } from 'react-router-dom'


const OrderConfirmation = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div class="notifications-container">
  <div class="success">
    <div class="flex">
      <div class="flex-shrink-0">
        
        <svg class="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
      </div>
      <div class="success-prompt-wrap">
        <p class="success-prompt-heading">Order comfirmed
        </p><div class="success-prompt-prompt">
          <p>We will inform the client with your confirmation.</p>
        </div>
          <div class="success-button-container">
            <button onClick={()=>{handleClick()}} type="button" class="success-button-main">Continue</button>
            <button type="button" class="success-button-secondary">Dismiss</button>
          </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default OrderConfirmation