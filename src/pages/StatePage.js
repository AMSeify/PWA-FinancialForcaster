import React from "react"
import ChartDonat from "../components/ChartDonat"
import ChartLine from "../components/ChartLine"
import DownPanel from "../components/DownPanel"
import NavbarDesktop from "../components/NavbarDesktop"

const StatePage = () => {
  return (
    <div>
      <NavbarDesktop />
      <div className="stats-container">
        <ChartLine />
        <ChartDonat />
        <ChartDonat />
        <ChartDonat />
        <ChartDonat />
        <ChartDonat />
      </div>
      <DownPanel />
    </div>
  )
}

export default StatePage
