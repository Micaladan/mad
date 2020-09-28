import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const element = <FontAwesomeIcon icon={faTrash} />

const GroceryListPage = () => {
  const handleDelete = event => {
    event.persist()
    updateTodos(todos.filter(x => event.target.id != x))
  }
  const [input, updateInput] = useState("")
  const [todos, updateTodos] = useState([])
  const onChangeHandler = event => {
    updateInput(event.target.value)
  }
  const onSubmitHandler = event => {
    event.preventDefault()
    if (!input) {
      return
    }
    updateTodos([...todos, input])
    updateInput("")
  }

  return (
    <Layout>
      <SEO title="Grocery List" />
      <div style={styles.container}>
        <h1 style={styles.title}>Grocery List</h1>
        <form onSubmit={onSubmitHandler}>
          <input
            value={input}
            onChange={onChangeHandler}
            style={styles.input}
            placeholder="add a new item"
          ></input>
        </form>
        {todos.map(x => (
          <div key={x}>
            <div>
              <span id={x} onClick={handleDelete} style={styles.trash}>
                {element}
              </span>
              <h1 style={styles.items} key={x}>
                {x}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const styles = {
  container: {
    border: "2px solid grey",
    marginTop: "2rem",
  },
  title: {
    background: "#333",
    border: "2px solid grey",
    color: "white",
    padding: "1rem",
    marginBottom: 0,
    textAlign: "center",
  },
  input: {
    margin: 0,
    width: "100%",
    padding: "1rem",
    marginBottom: 0,
    textAlign: "center",
  },
  items: {
    color: "white",
    background: "#555",
    padding: "1rem",
    marginBottom: 0,
    textAlign: "center",
  },
  trash: {
    float: "left",
    background: "#ff0000",
    color: "white",
    padding: "1rem",
  },
}
export default GroceryListPage
