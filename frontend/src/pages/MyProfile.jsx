import React from 'react';
import { Container } from 'react-bootstrap';
import ProfileForm from '../components/myProfileForm/ProfileForm.jsx';

const MyProfile = () => (
  <Container className="py-5">
    <h1 className="text-uppercase">Мой профиль</h1>
    <p className="fs-5">
      Заполни свой профиль максимально подробно. Это влияет на возможность
      попасть на стажировку в компанию!
    </p>
    <p className="fs-5">
      Профиль можно редактировать, не бойся ошибиться, всегда сможешь поправить.
    </p>
    <p className="fs-5">
      Кандидаты с пустыми или не полностью заполненными профилями не смогут
      подать заявки на стажировку.
    </p>

    <ProfileForm />

  </Container>
);

export default MyProfile;
