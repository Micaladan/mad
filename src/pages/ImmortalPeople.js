import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import ImmortalLayout from "../components/ImmortalLayout"
import Card from "../components/Card"

const ImmortalPeople = () => (
  <ImmortalLayout>
    <SEO title="Immortal The Invisible War" />
    <h1>Immortal People</h1>
    <div className="cards">
      <Card
        imgSrc="https://randomuser.me/api/portraits/women/21.jpg"
        name="Jessica Duncan"
        description="Proprieter of the Mercantile Library. Drives a bright green Jaguar. "
      ></Card>
      <Card
        imgSrc="https://randomuser.me/api/portraits/men/1.jpg"
        name="Brad Neimyer"
        description="Our tech guy who did not hear the ghost voices, is he the bug?"
      ></Card>
      <Card
        imgSrc="https://randomuser.me/api/portraits/women/1.jpg"
        name="Jane Brannigan"
        description="The Owl Ghost Lady who died at the library, probably killed by Reginald"
      ></Card>

      <Card
        imgSrc="https://randomuser.me/api/portraits/men/21.jpg"
        name="Reginald Osiris"
        description="Owner of the library, suspect of bad behavior"
      ></Card>

      <Card
        imgSrc="https://randomuser.me/api/portraits/women/2.jpg"
        name="Parking Lot Victim"
        description="Derrick to name later. Patron of library"
      ></Card>

      <Card
        imgSrc="https://randomuser.me/api/portraits/women/3.jpg"
        name="Naomi 'Lanfear'"
        description="Fancily tattoed stripper who helps us with immortal stuff"
      ></Card>
      <Card
        imgSrc="https://randomuser.me/api/portraits/men/2.jpg"
        name="Gerald Lane"
        description="Proprieter of the Hilton who needed help with ghost problems"
      ></Card>
      <Card
        imgSrc="https://images.unsplash.com/photo-1484611941511-3628849e90f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        name="Walter Whitaker"
        description="Suspicious rich guy who hired us to find missing girl, possibly lost at Springrove Cemetery"
      ></Card>
    </div>
  </ImmortalLayout>
)

export default ImmortalPeople
