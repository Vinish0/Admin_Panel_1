import React from 'react'
import Colors from '../components/Colors'
import PageHeading from '../components/PageHeading'

function MainColors() {

 const paragraph = `Bootstrap's default utility classes can be found on the official 
https://getbootstrap.com/docs page. The custom utilities
below were created to extend this theme past the default utility classes built into Bootstrap's
framework.`

  return (
    <>
    <PageHeading heading="Color Utilities" paragraph={paragraph}/>
    <Colors/>
    </>
  )
}

export default MainColors