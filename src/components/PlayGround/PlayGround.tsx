import React, {memo, useEffect, useState} from 'react'
import styled from "@emotion/styled";
import {DraggableItem} from "../DraggableItem/DraggableItem";
import {TargetItem} from "../TargetItem/TargetItem";
import {TargetPlace} from "../TargetPlace/TargetPlace";
import {getInitObjArray, getTargetObjArray} from "../../utils/func";
import {ItemStartPlace} from "../ItemStartPlace/ItemStartPlace";
import {sortItemsAsc} from "../../utils/sort";
import {TItem, TItems, TRangeKeys} from "../../utils/Types";
import {findNext, findPrev, getMax, getMin} from "../../utils/minMax";
import {FinalForm} from "../FinalForm/FinalForm";
import {getPlayGroundBG} from "../../utils/getPlayGroundBG";
import {AscDesc} from "../AscDesc/AscDesc";
import {getAudio} from "../../utils/getAudio";
import NavLink from "../NavLink/NavLink";

const StyledPlayGround = styled.button<{ rnd: number }>`
  position: relative;
  ${props => getPlayGroundBG(props.rnd)}
  width: 80vw;
  min-width: 800px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
`

const StyledTargetFragment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`


type TProps = {
    range: TRangeKeys
    initItems: number
    asc: boolean
    rnd: number
}
export const PlayGround: React.FC<TProps> = memo((props) => {
    const {initItems, rnd, asc, ...rest} = props

    const [remainItems, setRemainItems] = useState<TItems>(() => getInitObjArray(props.range, initItems, rnd))
    const [targetPlaceItems, setTargetPlaceItems] = useState<TItems>(() => getTargetObjArray(remainItems, !!props.asc))
    const [curDrag, setCurDrag] = useState<undefined | number>(undefined)
    const [isOver, setIsOver] = useState(false)

    const onTargetDropHandler = (id: number) => {
        const target = targetPlaceItems.find(v => v.id === id)
        const item = remainItems.find(v => v.id === curDrag)
        //if drop on empty space
        if (!!target && !!item && target.value === 0) {
            //find prev and next at left from target place
            const prev = findPrev(targetPlaceItems, id)
            const next = findNext(targetPlaceItems, id)
            if (asc) {
                if (prev > 0 && prev < item.numValue && item.numValue === getMin(remainItems)) setItemOnTarget(item, id)
                else playFailSound()
            } else {
                if (next > 0 && next > item.numValue && item.numValue === getMax(remainItems)) setItemOnTarget(item, id)
                else playFailSound()
            }
        }
    }

    const onItemStartDrag = (id: number) => {
        setCurDrag(id)
    }
    const playSuccessSound = () => {
        //play success sound
        const itemSuccessDropSound = getAudio.itemDropSuccess
        console.log(itemSuccessDropSound) // itemSuccessDropSound.play()
    }
    const playFailSound = () => {
        //play fail sound
        const itemFailDropSound = getAudio.itemReturn
        console.log(itemFailDropSound) // itemFailDropSound.play()
    }

    const setItemOnTarget = (item: TItem, id: number) => {
        playSuccessSound()
        //do replace from remain and target
        setTargetPlaceItems(a => a.map((v, i) => i === id ? {...item, id: v.id} : v))
        setRemainItems(a => a.filter(v => v.id !== item.id))
    }

    useEffect(() => {
        const removeIndex = props.asc ? 0 : targetPlaceItems.length - 1
        const temp = [...remainItems].sort(sortItemsAsc)[removeIndex]
        setTargetPlaceItems(a => a.map((v, i) => i === removeIndex ? {...temp, id: v.id} : v))
        setRemainItems(a => a.filter(v => v.value !== temp.value))
    }, [])
    useEffect(() => {
        setIsOver(remainItems.length === 0)
    }, [remainItems])
    return (
        <StyledPlayGround {...rest} rnd={rnd}>
            {!isOver
                ? <>
                    <ItemStartPlace
                        children={remainItems.map((v, i) =>
                            <DraggableItem key={v.id} item={v} pos={i} onItemStartDrag={onItemStartDrag}/>)}/>
                    <StyledTargetFragment>
                        <AscDesc asc={asc}/>
                        <TargetPlace rnd={rnd} children={targetPlaceItems.map((v, i) =>
                            <TargetItem key={v.id} item={v} onDropHandler={onTargetDropHandler}/>)}/>
                    </StyledTargetFragment>
                </>
                : <FinalForm/>}
        </StyledPlayGround>
    )
})
PlayGround.displayName = 'PlayGround'
export default PlayGround