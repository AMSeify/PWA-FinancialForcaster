import React from "react"
import { Link, useHistory } from "react-router-dom"
import { isMobile } from "react-device-detect"
import {
  FaHome,
  FaChartBar,
  FaUserAlt,
  FaSortAmountUp,
  FaSortAmountDown,
} from "react-icons/fa"

const DownPanel = () => {
  const history = useHistory().location.pathname
  return (
    <>
      {isMobile && (
        <div className="downbar">
          <div className="downbar-container">
            <div
              className={
                history === "/buy" ? "downbar-link active" : "downbar-link"
              }
            >
              <Link to="/buy">
                <span>خرید</span>
                <FaSortAmountUp />
              </Link>
            </div>
            <div
              className={
                history === "/user" ? "downbar-link active" : "downbar-link"
              }
            >
              <Link to="/user">
                <span>کاربر</span>
                <FaUserAlt />
              </Link>
            </div>
            <div
              className={
                history === "/my" ? "downbar-link active" : "downbar-link"
              }
            >
              <Link to="/my">
                <span>خانه</span>
                <FaHome />
              </Link>
            </div>
            <div
              className={
                history === "/stats" ? "downbar-link active" : "downbar-link"
              }
            >
              <Link to="/stats">
                <span>آمار</span>
                <FaChartBar />
              </Link>
            </div>
            <div
              className={
                history === "/sell" ? "downbar-link active" : "downbar-link"
              }
            >
              <Link to="/sell">
                <span>فروش</span>
                <FaSortAmountDown />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DownPanel
