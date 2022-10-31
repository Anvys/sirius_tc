import {NavBar} from "../src/components/NavBar/NavBar";
import {MainLayout} from "../src/components/MainLayout/MainLayout";
import styled from "@emotion/styled";
import {getBackGround} from "../src/utils/getIcon";
import {RangeInput} from "../src/components/RangeInput/RangeInput";
import {useEffect, useState} from "react";
import {SettingButton} from "../src/components/SettingButton/SettingButton";
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch} from "../src/redux/store";
import {settingsSlice} from "../src/redux/Slice/settingsSlice";
import {SettingSelectors} from "../src/redux/Selectors/SettingSelectors";
import {TRangeKeys} from "../src/utils/Types";
import {NavLink} from "../src/components/NavLink/NavLink";
import {FinalForm} from "../src/components/FinalForm/FinalForm";

const StyledSettings = styled.div`
  position: relative;
  background: url(${getBackGround('setting')}) center / cover no-repeat;
  
  width: 80vw;
  //min-height: fit-content;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSettingWnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 5px 0 ;
  background: #FFFFFF;
  border-radius: 40px;
  width: 80%;
  
  min-height: fit-content;
  //height: 80%;
  position: relative;
  color: black;

  &:before {
    content: "";
    //width: calc(80vw*0.85);
    //height: 100%;
    top: -15px;
    bottom: -15px;
    left: -15px;
    right: -15px;
    border-radius: 50px;
    background: linear-gradient(198.7deg, #7F75F0 100%, #101F32 100%);
    position: absolute;
    z-index: -1;
  }
`

const StyledButtonLine = styled.div`
display: flex;
  gap: 5px;
  margin-bottom: 15px;
`

const Settings = () => {
    const dispatch = useAppDispatch()
    const storedCount = useSelector(SettingSelectors.getCount)
    const storedValue = useSelector(SettingSelectors.getValue)
    const storedAsc = useSelector(SettingSelectors.getAsc)
    // console.log(storedCount, storedValue, storedAsc)
    const [diff, setDiff] = useState<number>(() => storedCount)
    const [val, setVal] = useState<TRangeKeys>(()=> storedValue)
    const [asc, setAsc] = useState(()=> storedAsc)

    const onDifChange = (d: number | string) => setDiff(d as number)
    const onValChange = (d: number | string) => setVal(d as TRangeKeys)
    const onAscClick = () => setAsc(true)
    const onDescClick = () => setAsc(false)

    const onPlayClick = () =>{
        dispatch(settingsSlice.actions.setCount(diff))
        dispatch(settingsSlice.actions.setValue(val))
        dispatch(settingsSlice.actions.setAsc(asc))
        dispatch(settingsSlice.actions.setRnd())
    }
    return (
        <MainLayout>
            <StyledSettings>
                <StyledSettingWnd>
                    <div>{`dif: ${diff} val: ${val} asc: ${asc}`}</div>
                    <RangeInput text={'Кол-во предметов'} values={[ 2, 3, 4, 5]} onChange={onDifChange} initVal={diff}/>
                    <RangeInput text={'Значения'} values={['A', '9', '19', '50', '99', '999']} onChange={onValChange} initVal={val}/>
                    <StyledButtonLine>
                        <SettingButton text={'По возрастанию'} onClick={onAscClick} bType={'set'} active={asc} />
                        <SettingButton text={'По убыванию'} onClick={onDescClick} bType={'set'}  active={!asc}/>
                    </StyledButtonLine>
                    <SettingButton text={<NavLink text={'Играть'} href={'/'}/>} onClick={onPlayClick} bType={'game'} active/>

                </StyledSettingWnd>
            </StyledSettings>
        </MainLayout>
    )
}
export default Settings