import {
    LinkField,
    withDatasourceCheck,
    Field
  } from '@sitecore-jss/sitecore-jss-nextjs';
  import { ComponentProps } from 'lib/component-props';
  import styles from './styles/header.module.scss'
  
  type NavigationLink = {
    link: LinkField
    text: Field<string>;
  };
  
  interface Fields {
    data: {
      datasource: {
        children: {
          results: NavigationLink[]
        };
      };
    };
  }
  
  type HeaderProps = ComponentProps & {
    fields: Fields;
  };
  
  const LinkListItem = (props: NavigationLink) => {
    console.log(props.link);
    const linkUrl= props.link?.value?.href;
    console.log({linkUrl});
    return <a href={linkUrl} className={styles.navLinks}>{props.text?.value}</a>;
  };
  
  const Header = (props: HeaderProps): JSX.Element => {
  
    const datasource = props.fields?.data?.datasource;
    if (datasource) {
      const list = datasource.children.results.map((element, index) => (
            <LinkListItem key={index}
                link={element.link}
                text={element.text} />
      ));
      return (
        <div className={styles.header}>
          <div className={styles.leftNav}>
            <a href="/" className={styles.logo}>
              <h1 className="logo-text"><i className="far fa-hospital me-3"></i>Klinik</h1>
          </a>
          </div>
          <div className={styles.rightNav}>
            <div>{list}</div>
            <div className={styles.navButton}>
              <a href='/' className={styles.apptLink}>Appointment<i className="fa fa-arrow-right ms-3"></i></a>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div>
        <div className="component-content">
          <h3>Header</h3>
        </div>
      </div>
    );
  };
  export default withDatasourceCheck()<HeaderProps>(Header);
