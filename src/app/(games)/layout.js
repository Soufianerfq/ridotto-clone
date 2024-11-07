import { AppWrapper } from "../(context)/context"

export default function Layout({ children }) {
    return <>
        <AppWrapper>
            {children}
        </AppWrapper>
    </>
}