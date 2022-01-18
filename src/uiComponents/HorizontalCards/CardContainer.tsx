import React from "react"
import Card from "./Card"

export type ICard = {
  day: number,
  learntSubjects: string[],
  subTitle: string
}

const cards: ICard[] = [
  { day: 1, subTitle: 'React Basics', learntSubjects: ['Hello world', 'Introducing JSX', 'Rendering Elements', 'Component & Props'] },
  { day: 2, subTitle: 'React Basics', learntSubjects: ['State and Lifecycle', 'Handling Events', 'Conditional Rendering', 'Lists & Keys'] },
  { day: 3, subTitle: 'React Basics', learntSubjects: ['Forms', 'Lifting State Up'] },
  { day: 4, subTitle: 'React Basics', learntSubjects: ['Components vs Inheritance', 'Thinking in React (Includes mini temperature converter app)'] },
  { day: 5, subTitle: 'Styling in react', learntSubjects: ['Tailwind CSS Setup', 'Basic React Styled Components', 'Implemented this cards '] },

]

function CardContainer() {
  return (
    <div className="flex flex-wrap ">
      {
        cards.map((value, key) => {
          return <Card key={value.day} card={value} />
        })
      }
    </div>
  )
}

export default CardContainer