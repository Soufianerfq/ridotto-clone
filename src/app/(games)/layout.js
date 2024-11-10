import { CoinFLip } from "../(context)/coinFlip"
import { Slots } from "../(context)/slots"
import { GamesProvider } from "../(context)/gamesProvider"


export default function Layout({ children }) {
    return <>
        <GamesProvider>
            <CoinFLip>
                <Slots>
                    {children}
                </Slots>
            </CoinFLip>
        </GamesProvider>
    </>
}