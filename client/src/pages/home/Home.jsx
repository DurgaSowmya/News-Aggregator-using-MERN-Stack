import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import { UserPost } from "./UserPost"
export const Home = () => {
  return (
    <>
      {/*  <Slider />*/}
      <Category />
      <Card />
      <UserPost />
    </>
  )
}
