import { ComponentProps } from "@sitecore-feaas/clientside";
import { RichTextField } from "@sitecore-jss/sitecore-jss-nextjs";
import { Image, ImageField, Link, LinkField, RichText, Text, TextField } from "@sitecore-jss/sitecore-jss-react";

type AboutProps = ComponentProps & {
    fields: {
        Title: TextField,
        SubTitle: TextField,
        Content: RichTextField,
        ImageOne: ImageField,
        ImageTwo: ImageField,
        MoreLink: LinkField
    }
};

export const Default = (props: AboutProps): JSX.Element => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex flex-column">
                            <Image field={props.fields.ImageOne} className="img-fluid rounded w-75 align-self-end" />
                            <Image field={props.fields.ImageTwo} className="img-fluid rounded w-50 bg-white pt-3 pe-3"  style={{marginTop: '-25%'}} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <p className="d-inline-block border rounded-pill py-1 px-4"><Text field={props.fields.Title} /></p>
                        <h1 className="mb-4"><Text field={props.fields.SubTitle} /></h1>
                        <div>
                            <RichText field={props.fields.Content} />
                        </div>
                        <Link field={props.fields.MoreLink} className="btn btn-primary rounded-pill py-3 px-5 mt-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
// Rending variant - we need to add variant under site  presentation we will have Headless variants and we can add variant for renderings
// and select the required variant while adding the component
export const WithOutLink = (props: AboutProps): JSX.Element => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex flex-column">
                            <Image field={props.fields.ImageOne} className="img-fluid rounded w-75 align-self-end" />
                            <Image field={props.fields.ImageTwo} className="img-fluid rounded w-50 bg-white pt-3 pe-3"  style={{marginTop: '-25%'}} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <p className="d-inline-block border rounded-pill py-1 px-4"><Text field={props.fields.Title} /></p>
                        <h1 className="mb-4"><Text field={props.fields.SubTitle} /></h1>
                        <div>
                            <RichText field={props.fields.Content} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
// export default AboutUs;