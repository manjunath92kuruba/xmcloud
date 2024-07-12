// import { ComponentProps } from "lib/component-props";
import { ComponentProps } from "@sitecore-feaas/clientside";
import { Field, RichTextField, TextField } from "@sitecore-jss/sitecore-jss-nextjs";
import { RichText, Text } from "@sitecore-jss/sitecore-jss-react";

interface Footer{
    Address: RichTextField,
    QuickLinks: TextField,
    QuickLinksList: [
        fields: {
            fields:{
                Text: {
                    value: string
                },
                Link: {
                    value: {
                        href: string
                    }
                }
            }
        }
    ],
    Services: TextField,
    ServicesList: [
        fields: {
            name: string,
            url: string
        }
    ],
    NewsLetter: RichTextField,
    CopyRights: RichTextField
}


type FooterProps = ComponentProps & {
    fields: Footer
};

export const Default=(props: FooterProps): JSX.Element => {
    return (
        // <!-- Footer Start -->
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn footer" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <RichText field={props.fields.Address} />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">
                                <Text field={props.fields.Services} />
                            </h5>
                            {props.fields.ServicesList.map((service,index) => (
                                <a key={index} className="btn btn-link" href={service.url}>{service.name}</a>
                            ))}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">
                                <Text field={props.fields.QuickLinks} />
                            </h5>
                            {props.fields.QuickLinksList.map((quickLink,index) => (
                                <a key={index} className="btn btn-link" href={quickLink.fields.Link.value.href}>{quickLink.fields.Text.value}</a>
                            ))}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <RichText field={props.fields.NewsLetter} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- Footer End -->
    )
}