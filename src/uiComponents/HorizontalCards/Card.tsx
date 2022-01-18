import styled from "styled-components";
import { ICard } from "./CardContainer";

const TitleOfCard = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
`
type IProps = {
  card: ICard
}
function Card(props: IProps) {
  const card = props.card
  return (
    <div className="shadow-sm rounded-md m-3 bg-slate-100 hover:shadow-md p-4 flex-auto max-w-lg">
      <div className="mb-4">
        <TitleOfCard>
          Day {card.day}
        </TitleOfCard>
        <p className=" text-gray-600 text-base text-center"> {card.subTitle}</p>
      </div>
      {
        card.learntSubjects.map((value, key) => {
          return (
            <p className="text-lg break-words" key={key}>  {value} </p>
          )
        })
      }
    </div>
  )
}

export default Card