import {
    Field,
    TextField,
    Text
  } from '@sitecore-jss/sitecore-jss-nextjs';
  import { ComponentProps } from 'lib/component-props';
  
  type NavigationLink = {
    link: {
      jsonValue: {
        value: {
          href: string
        }
      }
    }
    text: Field<string>;
  };
  
  interface Fields {
    data: {
      datasource: {
        Address:TextField,
        Timings: TextField,
        Phone: TextField,
        socialLinks: {
          targetItems: NavigationLink[]
        }
        children: {
          results: NavigationLink[]
        };
      };
    };
  }
  
  type HeaderProps = ComponentProps & {
    fields: Fields;
  };
  // To loop the navigation link
  const LinkListItem = (props: NavigationLink) => {
    return <a href={props.link.jsonValue.value.href} className="nav-item nav-link">{props.text?.value}</a>;
  };
  // To loop the social link
  const SocialLink = (props: NavigationLink) => {
    console.log("this is social link method");
    console.log(props);
      return <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href={props.link.jsonValue.value.href}>
        <i className={props.text.value}></i>
      </a>
    }
  
    export const Default = (props: HeaderProps) => {
    const datasource = props.fields?.data?.datasource;
    const socialLinksData = props.fields?.data?.datasource?.socialLinks;
      // For pulling the Navigation links
      const list = datasource.children.results.map((element, index) => (
            <LinkListItem key={index}
                link={element.link}
                text={element.text} />
      ));
      // For pulling the social links
      const socialLinksList = socialLinksData.targetItems.map((socialLink, index) => (
          <SocialLink key={index} link={socialLink.link} text={socialLink.text} />
        ));
      return (
        <div className='header'>
          {/* Topbar Start */}
          <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
              <div className="row gx-0 d-none d-lg-flex">
                  <div className="col-lg-7 px-5 text-start">
                      <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                          <small className="fa fa-map-marker-alt text-primary me-2"></small>
                          <small>
                            <Text field={props.fields.data.datasource.Address} />
                          </small>
                      </div>
                      <div className="h-100 d-inline-flex align-items-center py-3">
                          <small className="far fa-clock text-primary me-2"></small>
                          <small>
                            <Text field={props.fields.data.datasource.Timings} />
                          </small>
                      </div>
                  </div>
                  <div className="col-lg-5 px-5 text-end">
                      <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                          <small className="fa fa-phone-alt text-primary me-2"></small>
                          <small>
                            <Text field={props.fields.data.datasource.Phone} />
                          </small>
                      </div>
                      <div className="h-100 d-inline-flex align-items-center">
                          {socialLinksList}
                      </div>
                  </div>
              </div>
          </div>
          {/* Top bar end */}

          {/* Navbar Start */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
              <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                  <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>Klinik</h1>
              </a>
              <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto p-4 p-lg-0">
                      {list}
                  </div>
                  <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></a>
              </div>
          </nav>
          {/* Navbar End */}
        </div>
      );
    }
