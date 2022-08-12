import React from 'react'
import Border from '../components/Border'
import PageHeading from '../components/PageHeading'

function MainBorder() {

  const paragraph = `Bootstrap's default utility classes can be found on the official
  https://getbootstrap.com/docs page. The custom utilities
below were created to extend this theme past the default utility classes built into Bootstrap's
framework.`
  return (
    <>
    <PageHeading heading="Border Utillities" paragraph = {paragraph}/>
    <Border/>
    </>
  )
}

export default MainBorder