import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { Form } from 'Styled';

function ContactForm() {
  const [state, handleSubmit] = useForm('xdobrked');
  const { t } = useTranslation();

  if (state.succeeded) {
    return <p className="Submitted">{t('Submit')}</p>;
  }
  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">{t('Email')}</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="Name">{t('Name')}</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="message">{t('Message')}</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Form>
  );
}
export default function Contact() {
  return <ContactForm />;
}
