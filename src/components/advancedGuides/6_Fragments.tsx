import React from "react";

export const ThatReturnsFragments = () => {
  return (
    <React.Fragment >
      <p> Hello this is a P Tag</p>
      <span> Hello this is a span Tag</span>

    </React.Fragment>
  )
}

export const ThatReturnsShortSyntaxFragments = () => {
  return (

    <>
      <p> In the short syntax fragments you can't set the key that will be problem
        if you are iterating through a map or array. Also if you are using table
        then you cant return several tds
        and if you enclose that with a div then the table is not valid
      </p>
    </>
  )
}