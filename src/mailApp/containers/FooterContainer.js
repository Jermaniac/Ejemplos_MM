import { FooterComponent } from "../components/FooterComponent"

export const FooterContainer = () => {

    const calculateDate = () => {
        return new Date().getFullYear();
    }

    const calculateNames = () => {
        return `Javier & German`
    }

    return (
        <FooterComponent calculateDate={calculateDate} calculateNames={calculateNames}></FooterComponent>
    )
}