import React, { BaseSyntheticEvent, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { settings } from '../../../settings/settings';

export default function Form() {
  const {YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY} = settings;

  const [name_state, setNameState] = useState(0);
  const [email_state, setEmailState] = useState(0);
  const [subject_state, setSubjectState] = useState(0);
  const [message_state, setMessageState] = useState(0);

  const form = useRef();

  function validation(e: BaseSyntheticEvent) {
    e.preventDefault();

    if (e.target[0].value == '') {
      setNameState(1);
    } else if (e.target[0].value.length > 50) {
      setNameState(2);
    }

    if (e.target[1].value == '') {
      setEmailState(1);
    } else if (e.target[1].value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) == null) {
      setEmailState(2);
    }

    if (e.target[2].value == '') {
      setSubjectState(1);
    } else if (e.target[2].value.length > 100) {
      setSubjectState(2);
    }

    if (e.target[3].value == '') {
      setMessageState(1);
    } else if (e.target[3].value.length > 500) {
      setMessageState(2);
    }

    else {
      setNameState(0);
      setEmailState(0);
      setSubjectState(0);
      setMessageState(0);
      e.target.reset();
      sendEmail();
    }
  };

  function sendEmail() {
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY);
  };

  return (
    <form ref={form} onSubmit={validation}>
      <div className={'input-wrap ' + (name_state != 0 ? 'input-wrap-error' : null)}>
        <input type='text' name='name' placeholder='Имя'/>
      </div>
      { name_state == 1 ? <small>Введите имя!</small> : name_state == 2 ? <small>Не более 50 символов!</small> : null}
      <div className={'input-wrap ' + (email_state != 0 ? 'input-wrap-error' : null)}>
        <input type='email' name='email' placeholder='Email'/>
      </div>
      { email_state == 1 ? <small>Введите адрес почты!</small> : email_state == 2 ? <small>Неверный адрес почты!</small> : null}
      <div className={'input-wrap ' + (subject_state != 0 ? 'input-wrap-error' : null)}>
        <input type='text' name='subject' placeholder='Предмет'/>
      </div>
      { subject_state == 1 ? <small>Введите текст!</small> : subject_state == 2 ? <small>Не более 100 символов!</small> : null}
      <div className={'input-wrap ' + (message_state != 0 ? 'input-wrap-error' : null)}>
        <textarea name='message' placeholder='Сообщение'/>
      </div>
      { message_state == 1 ? <small>Введите текст!</small> : message_state == 2 ? <small>Не более 500 символов!</small> : null}
      <input id='submit-btn' type='submit' value={'Отправить'}/>
    </form>
  )
};