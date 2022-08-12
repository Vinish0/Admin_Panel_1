import React from 'react'
import Animations from '../components/Animations'
import PageHeading from "../components/PageHeading"

function MainAnimations() {
  const paragraph = `Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.`
  return (
   <>
   <PageHeading heading="Animation Utilities" paragraph={paragraph}/>
   <Animations/>
   </>

   )
}

export default MainAnimations