import Card from "./Card"
import React from "react"

export type ICard = {
  day: number,
  learntSubjects: string[],
  subTitle: string
}

type IProps = {

}

type IState = {
  cards: ICard[]
}

const cards: ICard[] = [
  { day: 1, subTitle: 'React Basics', learntSubjects: ['Hello world', 'Introducing JSX', 'Rendering Elements', 'Component & Props'] },
  { day: 2, subTitle: 'React Basics', learntSubjects: ['State and Lifecycle', 'Handling Events', 'Conditional Rendering', 'Lists & Keys'] },
  { day: 3, subTitle: 'React Basics', learntSubjects: ['Forms', 'Lifting State Up'] },
  { day: 4, subTitle: 'React Basics', learntSubjects: ['Components vs Inheritance', 'Thinking in React (Includes mini temperature converter app)'] },
  { day: 5, subTitle: 'Styling in react', learntSubjects: ['Tailwind CSS Setup', 'Basic React Styled Components', 'Implemented this cards '] },
  { day: 6, subTitle: 'Practicing Styling with Tailwind', learntSubjects: ['Added React Playground', 'Refactoring UI upto Page 51', 'Key Take : Colors are important not always', 'Styled some existing components'] },
  { day: 7, subTitle: 'Tailwind and styled components', learntSubjects: ['Added tailwind css in most of the places', 'Added 4 Styled components with conditional rendering', 'UI - Temperature Convertor', 'UI - Stocks 🤣'] }

]
class CardContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { cards: cards }
  }

  handleClick = () => {
    this.setState({ cards: this.state.cards.reverse() })
  }
  render() {
    const cards = this.state.cards
    return (
      <div className="text-center">
        <button onClick={this.handleClick} className='bg-cyan-600 text-white rounded-2xl px-4 py-3 m-2 hover:bg-cyan-700'>
          Reverse the days
        </button>
        <div className="flex flex-nowrap overflow-x-auto">
          {
            cards.map((value, key) => {
              return <Card key={value.day} card={value} />
            })
          }
        </div>
      </div>
    )
  }

}

export default CardContainer