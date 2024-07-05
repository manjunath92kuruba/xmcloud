import { ComponentProps } from "@sitecore-feaas/clientside"
import { Field, Image, ImageField, Text, TextField } from "@sitecore-jss/sitecore-jss-nextjs"
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type HeroProps = ComponentProps & {
    fields: {
        Title: TextField,
        Counters: [
            counterItems: {
                fields: {
                    CountNumber: Field<string>;
                    Text: Field<string>;
                }
            }
        ],
        Carousel: [
            carouselItem: {
                fields: {
                    Image: ImageField;
                    Title: Field<string>;
                }
            }
        ]
    }
}

export const Default=(props: HeroProps): JSX.Element=>{
    console.log(props.fields);
    const counterItems = props.fields.Counters.map((counterItem,index) => {
        return <div className="col-sm-4" key={index}>
                <div className="border-start border-light ps-4">
                    <h2 className="text-white mb-1" data-toggle="counter-up">
                        <Text field={counterItem.fields.CountNumber} />
                    </h2>
                    <p className="text-light mb-0">
                        <Text field={counterItem.fields.Text} />
                    </p>
                </div>
            </div>
    });

    const carouselItems = props.fields.Carousel.map((carouselItem,index) => {
        return <div className="owl-carousel-item position-relative" key={index}>
                    <Image field={carouselItem.fields.Image} className="img-fluid" />
                    <div className="owl-carousel-text">
                        <h1 className="display-1 text-white mb-0">
                            <Text field={carouselItem.fields.Title} />
                        </h1>
                    </div>
                </div>
    })

    return(
        <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                <h1 className="display-4 text-white mb-5">
                    <Text field={props.fields.Title} />
                </h1>
                <div className="row g-4">
                    {counterItems}
                </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="owl-carousel header-carousel">
                <Carousel showThumbs={false} autoPlay>
                    {carouselItems}
                </Carousel>
                </div>
            </div>
        </div>
    </div>
    )
}
