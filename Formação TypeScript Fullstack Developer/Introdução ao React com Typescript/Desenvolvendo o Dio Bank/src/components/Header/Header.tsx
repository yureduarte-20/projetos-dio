import { PropsWithChildren } from 'react'
import './Header.css'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className='header'>
        Dio Bank
      </div>
      {children}
    </>
  )
}
