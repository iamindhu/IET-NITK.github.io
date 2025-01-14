import { Link } from "gatsby"
import React from "react"

export const redirectController = control => {
  if (!control) {
  }
}
export const generateSIGHash = sig_images => {
  let img_hash = {}
  sig_images &&
    sig_images.forEach(element => {
      img_hash[element.name] = element.childImageSharp.fixed.srcWebp
    })
  return img_hash
}

export const RenderAuthors = (arr, cls) =>
  arr.map(({name}, index2) => (
    <>
      &nbsp;
      <Link
        key={"x" + index2}
        to={"/members/" + name.toLowerCase().split(" ").join("")}
      >
        {name}
      </Link>
      {index2 + 2 === arr.length
        ? " and"
        : index2 + 1 !== arr.length
        ? ","
        : ""}
    </>
  ))

  export const newRenderAuthors = (arr, cls) =>
  arr.map(({name}, index2) => (
    <>
      &nbsp;
      <Link
        key={"x" + index2}
        to={"/members/" + name.toLowerCase().split(" ").join("")}
      >
        {name}
      </Link>
      {index2 + 2 === arr.length
        ? " and"
        : index2 + 1 !== arr.length
        ? ","
        : ""}
    </>
  ))


