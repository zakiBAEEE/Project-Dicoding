import LocaleContext from "../contexts/LocaleContext";
import React from 'react';



const showFormattedDate = (date) => {
  const { locale } = React.useContext(LocaleContext)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  if (locale == 'id') {
    return new Date(date).toLocaleDateString('id-ID', options);
  }
  return new Date(date).toLocaleDateString('en-US', options);

};

export { showFormattedDate };
