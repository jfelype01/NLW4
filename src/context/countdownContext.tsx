import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { ConfirmCancelation } from "../components/ConfirmCancelation";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    confirmedCancellation: () => void;
    abandonedCicle: () => void;
    continueCicle: () => void
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children}: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05*60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const [modalConfirmCancellation, setModalConfirmCancellation] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;


    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setHasFinished(false);
        setIsActive(false);
        setTime(0.05*60);
    }

    function confirmedCancellation() {
        resetCountdown();
        setModalConfirmCancellation(false);
    }

    function abandonedCicle() {
        setModalConfirmCancellation(true)
        setIsActive(false)
    }

    function continueCicle() {
        setModalConfirmCancellation(false);
        setIsActive(true)
    }

    useEffect(()=> {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])
    
    

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountdown,
            resetCountdown,
            confirmedCancellation,
            abandonedCicle,
            continueCicle
        }}
    >
            {children}
            {modalConfirmCancellation && <ConfirmCancelation />}
        </CountdownContext.Provider>
    )
}