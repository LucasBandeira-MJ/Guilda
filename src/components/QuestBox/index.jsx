'use client'

import { useContext, useState } from 'react'
import { container, buttonContainer, questContainer, buttonDanger } from './QuestBox.module.sass'
import { QUEST_INFO } from 'utils/quest-info'
import { Button } from '../Button'
import { QuestsContext } from 'context/QuestsContext'


export const QuestBox = () => {
    const { questStatus, acceptQuest, rejectQuest } = useContext(QuestsContext)
    // const [questStatus, setQuestStatus] = useState('frontDesk')
    const questInfo = QUEST_INFO
    const { type, difficulty, focus } = questInfo

    const getRandomInt = max => Math.floor(Math.random() * max)

      const getQuestType = () => type[getRandomInt(type.length)]
      const getQuestDifficulty = () => difficulty[getRandomInt(difficulty.length)]
      const getQuestFocus = () => focus[getRandomInt(focus.length)]

    return (
        <div className={container}>
            
            { (questStatus === 'frontDesk') ? (
                <div className={buttonContainer}>
                    <Button type='primary' text='Give me a quest!' onButtonClick={acceptQuest} />
                </div>
            ) : (
                <div className={questContainer}>
                    <p> Quest Difficulty: { getQuestDifficulty() } </p> 
                    <p> Quest Type: { getQuestType() } </p> 
                    <p> Quest Focus: { getQuestFocus() } </p>
                    <button className={buttonDanger} onClick={rejectQuest}>I don't want this quest!</button>
                </div>
            ) }
           
        </div>
    )
}