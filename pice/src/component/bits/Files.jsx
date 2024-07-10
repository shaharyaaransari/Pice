import React from 'react'
import "./File.css"
import { getCharacter } from '../../helper'
export const Files = ({files}) => {
  return (
    <div className='files'>
    {files.map((file)=><span key={file}>{ getCharacter(file)}</span>)}
</div>
  )
}
