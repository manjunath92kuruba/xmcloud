import { Field } from "@sitecore-jss/sitecore-jss-nextjs"
import { ComponentProps } from "lib/component-props"

type Services = {
    title: Field<string>,
    iconClass: Field<string>,
    content: Field<string>,
    url: {
        url: string
    }
}

interface Fields {
    data: {
        datasource: {
            servicesList: {
                targetItems: Services[]
            }
        }
    }
}

type ServicesProps = ComponentProps & {
    fields: Fields
}

export const Default = (props: ServicesProps): JSX.Element => {
    const datasource = props.fields.data.datasource.servicesList;
    return(
        <div>
            <p>This is services</p>
            {datasource.targetItems.map((element, index) =>(
                <a key={index}
                    href={`${element.url.url.replace("http://cm/en","")}`}>
                    <p>{element.title.value}</p>
                    <p>{element.content.value}</p>
                </a>
            ))}
        </div>
    )
}