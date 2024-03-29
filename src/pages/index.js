import React from "react"

import Layout from "../components/Layout/Layout"



import Hero from "../components/Hero/Hero"
import HistorySection from "../components/HistorySection/HistorySection"
import JoinBHNA from "../components/JoinBHNA/JoinBHNA"

import SEO from "../components/seo"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <HistorySection />
    <JoinBHNA />
    
   

 </Layout>
)

export default IndexPage



