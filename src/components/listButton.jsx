import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BottomNavBtn, CategoryBtn } from './button';
import house from '../src_asset/House.png';
import plus from '../src_asset/Plus.png';
import vector from '../src_asset/Vector.png';

export const CategoryBtnList = () => {
  const navigate = useNavigate();
  return (
    <div className="h-categoryBtnListHeight items-start">
      <CategoryBtn
        text="책"
        onClick={(event) => {
          event.preventDefault();
          navigate('book');
        }}
      />
      <CategoryBtn
        text="충전기"
        onClick={(event) => {
          event.preventDefault();
          navigate('charger');
        }}
      />
      <CategoryBtn
        text="계산기"
        onClick={(event) => {
          event.preventDefault();
          navigate('calculator');
        }}
      />
      <CategoryBtn
        text="학생용품"
        onClick={(event) => {
          event.preventDefault();
          navigate('supplies');
        }}
      />
      <CategoryBtn
        text="분실물"
        onClick={(event) => {
          event.preventDefault();
          navigate('lost');
        }}
      />
      <CategoryBtn
        text="그 외"
        onClick={(event) => {
          event.preventDefault();
          navigate('exception');
        }}
      />
    </div>
  );
};

export const BottomNavBtnList = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center items-center">
      <BottomNavBtn
        src={house}
        onClick={() => {
          navigate('/home');
        }}
      />

      <BottomNavBtn
        src={plus}
        onClick={() => {
          navigate('/post');
        }}
      />

      <BottomNavBtn
        src={vector}
        onClick={() => {
          navigate('/mypage');
        }}
      />
    </div>
  );
};
