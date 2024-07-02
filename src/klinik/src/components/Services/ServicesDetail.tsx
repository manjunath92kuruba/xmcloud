import { Field, useSitecoreContext } from "@sitecore-jss/sitecore-jss-nextjs"

export const Default = () => {
    const { sitecoreContext } = useSitecoreContext();
    const title = sitecoreContext.route?.fields?.Title as Field<string>;
    const content = sitecoreContext?.route?.fields?.Content as Field<string>;
    const iconClass = sitecoreContext?.route?.fields?.IconClass as Field<string>;
    return (
        <div>
            <h3>{title.value}</h3>
            <p>{content.value}</p>
            <p>{iconClass.value}</p>
        </div>
    )
}