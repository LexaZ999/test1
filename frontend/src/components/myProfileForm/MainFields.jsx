import React from 'react';
import InputField from './InputField.jsx';

const MainFields = () => {
  const data = [
    {
      name: 'lastname',
      id: 'lastname',
      label: 'Фамилия',
      type: 'text',
    },
    {
      name: 'firstname',
      id: 'firstname',
      label: 'Имя',
      type: 'tel',
    },
    {
      name: 'patronymic',
      id: 'patronymic',
      label: 'Отчество',
      type: 'text',
    },
    {
      name: 'birthDate',
      id: 'birthDate',
      label: 'Дата рождения',
      type: 'date',
    },
  ];
  return (
    <>
      {data.map((item) => (
        <InputField key={item.id} data={item} />
      ))}
    </>
  );
};

export default MainFields;
