import React from "react"
import { ListGroup } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa"
import { IoIosExit } from "react-icons/io"

import DownPanel from "../components/DownPanel"
import NavbarDesktop from "../components/NavbarDesktop"
const UserPage = () => {
  return (
    <>
      <NavbarDesktop />
      <div className="user-container">
        <div className="avatar-holder">
          <FaUserCircle />
          <p>رضا محمدی</p>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6">ایمیل:</span>
              <span>admin@example.com</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6">نوع اشتراک:</span>
              <span>طلایی</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6">شماره موبایل:</span>
              <span>09120000000</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6">کد معرفی:</span>
              <span>#3XTH67</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6">تاریخ پیوستن :</span>
              <span>1401/7/28</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6"> ربات تلگرام :</span>
              <span>فعال</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6"> اکانت تلگرام متصل :</span>
              <span>reza.mohammadi @</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6"> ارسال ایمیل خودکار :</span>
              <span>غیر فعال</span>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="user-desc">
              <span className="h6"> تعداد دستگاه متصل :</span>
              <span>2/3</span>
            </div>
          </ListGroup.Item>
          <div style={{ textAlign: "center" }}>
            <IoIosExit
              style={{
                color: "black",
                fontSize: "3rem",
                marginTop: "1rem",
              }}
            />
          </div>
        </ListGroup>
      </div>
      <DownPanel />
    </>
  )
}

export default UserPage
