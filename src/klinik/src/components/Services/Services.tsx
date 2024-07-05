import { Field, Text, TextField } from "@sitecore-jss/sitecore-jss-nextjs"
import { ComponentProps } from "lib/component-props"

type Services = {
    title: Field<string>,
    iconClass: Field<string>,
    content: Field<string>,
    detailsLink: {
        jsonValue: {
            value: {
                href: string,
                text: string
            }
        }
    }
}

interface Fields {
    data: {
        datasource: {
            Title: TextField,
            SubTitle: TextField,
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
        // <!-- Service Start -->
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <p className="d-inline-block border rounded-pill py-1 px-4">
                    <Text field={props.fields.data.datasource.Title} />
                </p>
                <h1>
                    <Text field={props.fields.data.datasource.SubTitle} />
                </h1>
            </div>
            <div className="row g-4">
            {datasource.targetItems.map((element, index) =>(
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div key={index} className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4">
                            <i className={element.iconClass.value}></i>
                        </div>
                        <h4 className="mb-3">{element.title.value}</h4>
                        <p className="mb-4">
                            {element.content.value}
                        </p>
                        <a className="btn" href={element.detailsLink.jsonValue.value.href}>
                            <i className="fa fa-plus text-primary me-3"></i>
                            {element.detailsLink.jsonValue.value.text}
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    // <!-- Service End -->
    )
}