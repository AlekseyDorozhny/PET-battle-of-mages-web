import React from 'react';
import './PlayerField.css';


function PlayerField() {
  return(
    <section className='playerField'>
      <div className='playerField__profile'>
        <div className='playerField__playerAvatar'></div>
        <div className='playerField__playerFamiliar'></div>
        <div className='playerField__playerProperty'></div>
      </div>
      <div className='playerField__mainField'>
        <div className='playerField__deck'>
          <p className='playerField__deckNumber'>5</p>
        </div>
        <div className='playerField__hand'>
          <div className='playerField__card'/>
          <div className='playerField__card'/>
          <div className='playerField__card'/>
          <div className='playerField__card'/>
          <div className='playerField__card'/>
        </div>
      </div>
      <div className='playerField__resourses'>
        <div className='playerField__deaths'>
          <div className='playerField__death playerField__death_inactive'/>
          <div className='playerField__death playerField__death_inactive'/>
        </div>
        <div className='playerField__points'>
          <div className='playerField__power'>
            <p className='playerField__pointsNumber'>0</p>
          </div>
          <div className='playerField__hp'>
            <p className='playerField__pointsNumber'>20</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayerField;
