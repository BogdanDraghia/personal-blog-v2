import style from './Contact.module.css';

type FieldType = 'text' | 'email' | 'textarea';

export interface FormFields {
  id: string;
  name: string;
  label: string;
  type: FieldType;
  requred?: boolean;
}

interface ContactFormProps {
  fields: FormFields[];
  action: string;
}

const ContactForm = ({ fields, action }: ContactFormProps) => {
  return (
    <form action={action} method="POST" className={style.form}>
      {fields.map((field) => (
        <div className={style.formWrap}>
          <label htmlFor={field.id}>Name</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              id={field.id}
              required={field.requred ? field.requred : false}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.id}
              required={field.requred ? field.requred : false}
            />
          )}
        </div>
      ))}
      <button type="submit" className={style.buttonForm}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
