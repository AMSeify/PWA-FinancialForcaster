import { Alert, ButtonGroup, Button } from "react-bootstrap"
import React from "react"
import DownPanel from "../components/DownPanel"
import UsageChart from "../components/UsageChart"
import { FaBitcoin } from "react-icons/fa"
import { isMobile } from "react-device-detect"
import NavbarDesktop from "../components/NavbarDesktop"
const MainPage = () => {
  return (
    <>
      <NavbarDesktop />
      <div className="home-container">
        {isMobile && (
          <h1 className="banner">
            <FaBitcoin /> کریپتو پرو
          </h1>
        )}

        <Alert className="mx-2" variant="dark">
          برای خرید یا تمدید اشتراک روی اشتراک مورد نظر کلیک کنید تا به صفحه
          پرداخت هدایت شوید .
        </Alert>
        <h3 className="my-4 ps-2">انواع اشتراک</h3>
        <div className="text-center">
          <ButtonGroup aria-label="Basic example" className="mb-2">
            <Button variant="warning">طلایی</Button>
            <Button variant="warning">ساده</Button>
            <Button variant="warning">پریمیوم</Button>
          </ButtonGroup>
        </div>
        <div className="usage-container">
          <h4 className="ps-2">مقدار عضویت باقی مانده</h4>
          <div>
            <UsageChart />
          </div>
        </div>

        <DownPanel />
      </div>
    </>
  )
}
export default MainPage
