import { ComponentProps } from "lib/component-props";

type FooterItem = {
    link: string,
    text: string
};

interface Fields{
    items: FooterItem[]
}


type FooterProps = ComponentProps & {
    fields: Fields
}

const FooterLinks = (props: FooterItem) => {
    return <a href={props.link}>{props.text}</a>
}

export const Default=(props: FooterProps): JSX.Element => {
    const footerList = props.fields.items.map((element: FooterItem, key: number) => (
        <FooterLinks key={key} link={element.link} text={element.text}></FooterLinks>
    ))
    return (
        <div>
            {footerList}
        </div>
    )
}