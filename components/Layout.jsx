import { Container } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AppBar from "./AppBar"

export default function Layout({children}) {

  useEffect(() => {
    window.innerWidth = '500px'
  }, [])
  return (
    <div>
      <AppBar />
      {children}
    </div>
  )
}
