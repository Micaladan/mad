import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const ImmortalLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#555",
          color: "white",
          textDecoration: "none",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "horizontal",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/Immortal/">Immortal Home</Link>
          </li>
          <li>
            <Link to="/ImmortalNotes/">Notes</Link>
          </li>
          <li>
            <Link to="/ImmortalPeople/">People</Link>
          </li>
        </ul>
      </div>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

ImmortalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ImmortalLayout
