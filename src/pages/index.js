import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(
      "https://youthful-noether-6e4573.netlify.com/.netlify/functions/github"
    )
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Lambda Call example</h1>
      <h2>Getting first 100 Jam3 repos</h2>

      {Boolean(repos) && repos.length && (
        <div
          className="repos"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "20px",
          }}
        >
          {repos.map(repo => (
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
          ))}
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
