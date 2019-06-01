import React from 'react';
import styles from './App.module.css';
import MainPage from '../Components/MainPage';
import AppRouter from './AppRouter';

export const BottomFooter =()=>{
  return (
    <div>footer</div>
  );
};

export const MyBankLogo =()=>{
  return <img src={process.env.PUBLIC_URL+'/img/mybank.png' } alt="mybank_logo" />
};


export const App =()=>{
    return (
      <MainPage>
        {
          <AppRouter/>
        }
      </MainPage>
    );
};

export default PageLayout;
