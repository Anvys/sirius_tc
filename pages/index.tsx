import {DraggableItem} from "../src/components/DraggableItem/DraggableItem";
import styled from "@emotion/styled";
import {TargetPlace} from "../src/components/TargetPlace/TargetPlace";
import {TargetItem} from "../src/components/TargetItem/TargetItem";
import dynamic from "next/dynamic";
import {MainLayout} from "../src/components/MainLayout/MainLayout";
import {useSelector} from "react-redux";
import {SettingSelectors} from "../src/redux/Selectors/SettingSelectors";
import {FinalForm} from "../src/components/FinalForm/FinalForm";
// import {PlayGround} from "../src/components/PlayGround/PlayGround";

const PlayGround = dynamic(
    () => import("../src/components/PlayGround/PlayGround"),
    { ssr: false }
)

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export default function Home() {
    const storedCount = useSelector(SettingSelectors.getCount)
    const storedValue = useSelector(SettingSelectors.getValue)
    const storedAsc = useSelector(SettingSelectors.getAsc)
    const storedRnd = useSelector(SettingSelectors.getRnd)
    return (
        <MainLayout>
            <StyledHome>
                <PlayGround range={storedValue} initItems={storedCount+1} asc={storedAsc} rnd={storedRnd}/>
            </StyledHome>
        </MainLayout>

    )
}
