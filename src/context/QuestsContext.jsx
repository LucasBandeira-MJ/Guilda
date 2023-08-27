'use client'

import { createContext, useState } from 'react'

export const QuestsContext = createContext()

export const QuestsProvider = (({ children }) => {
    const [questStatus, setQuestStatus] = useState('frontDesk')
    const [attendantDialogue, setAttendantDialogue] = useState({
        header: "Hello adventurer!",
        body: "What shall I help you with today?"
    })

    const acceptQuest = () => {
        setQuestStatus('accepted')

        setAttendantDialogue({
            header: "Wonderful!",
            body: "I've prepared this quest for you, let me know if it is to your liking."
        })
    }

    const rejectQuest = () => {
        setQuestStatus('frontDesk')

        setAttendantDialogue({
            header: "Pardon me!",
            body: "Is there anything else I can do for you?"
        })
    }


    return (
        <QuestsContext.Provider value={{ questStatus, acceptQuest, rejectQuest, attendantDialogue}}>
            { children }
        </QuestsContext.Provider>
    )
})