import React from "react"
import { useState } from "react"

const ScoreHolder = (props) => {
 
  const handleScoreOne = () => {
    setScoreOne(scoreOne + 1)
  }

  const handleScoreTwo = () => {
    setScoreTwo(scoreTwo + 1)
  }

  const handleScoreThree = () => {
    setScoreThree(scoreThree + 1)
  }

  const handleScoreFour = () => {
    setScoreFour(scoreFour + 1)
  }
}