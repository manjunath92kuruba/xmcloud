import { ComponentProps } from "@sitecore-feaas/clientside"
import { Image, ImageField, RichText, RichTextField } from "@sitecore-jss/sitecore-jss-nextjs"
import styles from './styles/herobanner.module.scss'

type HeroProps = ComponentProps & {
    fields: {
        Image: ImageField,
        Description: RichTextField
    }
}
export const Default=(props: HeroProps): JSX.Element=>{
    return(
        <div className={styles.heroBanner}>
            <RichText field={props.fields.Description} className={styles.textWrapper} />
            {/* <h1 className={styles.textWrapper}>{{ props.fields.Description }}</h1> */}
            <div className="img-wrapper">
                <Image field={props.fields.Image} />
            </div>
        </div>
    )
}
