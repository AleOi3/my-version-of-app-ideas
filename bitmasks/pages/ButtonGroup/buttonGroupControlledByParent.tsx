import { ReactNode, } from "react";
import { CircleCheckBtn } from "../../components/Buttons/circleCheckBtnFromParent";


export interface IObjLike {
  status: boolean;

}

export default function ButtonGroup<T extends IObjLike,>({
  id = 'BtnGtoup', buttonGroupState = [], children, onClick = () => { }
}: { id: string, buttonGroupState: T[], children?: ReactNode, onClick?: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void }) {
  return (
    <>
      {
        buttonGroupState.map((individualState, index) => {
          return <CircleCheckBtn
            key={`BtnGroupControlledByParent_${id}_${index}`}
            styles={{
              DefaultStyle: { backgroundColor: 'black' },
              HoverStyle: { backgroundColor: 'red' },
              DisabledStyle: { backgroundColor: 'white' },
            }}
            circleState={(individualState.status)}
            onClick={(event) => onClick(event, index)}
          ></CircleCheckBtn>

        })
      }
    </>
  )
}
