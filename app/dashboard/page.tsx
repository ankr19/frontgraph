import { CardComponent2 } from '@/components/CardComponents2'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-3 m-2'>
        <CardComponent2 ticketname={'Team ABAP'} ticketno={30} />
        <CardComponent2 ticketname={'Team SD'} ticketno={40} />
        <CardComponent2 ticketname={'Team MM'} ticketno={20} />
        <CardComponent2 ticketname={'Team HR'} ticketno={80} />
      </div>
    </>
  )
}
