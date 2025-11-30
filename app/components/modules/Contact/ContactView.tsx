import ContactForm, { type FormFields } from './ContactForm';
import style from './Contact.module.css';

const formfieldsData: FormFields[] = [
  {
    id: 'formName',
    name: 'name',
    label: 'Name',
    type: 'text',
    requred: true,
  },
  {
    id: 'formEmail',
    name: 'email',
    label: 'Email',
    type: 'email',
    requred: true,
  },
  {
    id: 'formMessage',
    name: 'message',
    label: 'Message',
    type: 'textarea',
    requred: true,
  },
];

const ContactView = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.subContactContainer}>
        <div className={style.contactBoxTextContainer}>
          <div className={style.contactBoxBoxTextSubContainer}>
            <h1>Get in touch</h1>
            <p>If you want to create something, don't hesitate to contact</p>
          </div>
        </div>
        <div className={style.contactBox}>
          <div className={style.formBox}>
            <ContactForm fields={formfieldsData} action={'https://formspree.io/f/mrgdbvbz'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
