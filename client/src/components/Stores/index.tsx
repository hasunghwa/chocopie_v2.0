import React from 'react';
import { StoresWrapper } from './style';
import StoreCard from './StoreCard';

interface StoreProps {
  id: number;
  name: string;
  mainImg: string;
  introduce: string;
  owner: string;
  address: string;
  phone: string;
}

const Stores = () => {
  const StoreList: StoreProps[] = [
    {
      id: 1,
      name: '가게1',
      mainImg:
        'https://lh3.googleusercontent.com/1nwmAGqHnWvC7sWwqaq-GV2kr0e9tnCkzlc1u_oPG0R29DUSVMAYCQcjEA8b01Hsaw5jedhuI7LCIG6baFWuyReLOw3NM68jD_00qG0tNky5l6WXhIkyDc-4SMBTn35UFUgfCj9uIZAsJjN7jeh1b_MnQzFRS5MIIzCbXXRmoDwgA__CWtV3b8bhHFmat1wRTYWSitsOk4G-hNvzzVTFuYk7eSF5tXK6zPd6BFXgVL7FwQrJma4lumuWMJrZo1zT0mZ3hEcxU_IZM8HcnahsBdo2qnGS66ZA9tyBIuBQKsJBtKXtrX2jcuaKog38pWELtsbIVdY69uT7Mw0lTbaabxjFav_MZddUx6VFC9IKpo0qPLiAHCURbcuOX9ydYrXUNlP5dZu5EwcA_YbroWSTRcsLocS9FTjsrvnA0INMrPEYWjPO1-GB3v0LkidfXlrUEFWB0enQAukgs-OuxxQwqixBIDz5Hq0-OHFdyuXDM-u9Gx5XacFXDoOjTmf5ImArDioYriHh86gvT6LiO8SreAQXQp9p_Xw2YQ-o6ENTGz6Gp8MmG_nozArqMdfw64QE3lmOfehZ8b1OHpLjAFa2pK7A96QAB_2hya17jziLxv8h_eIMZiMULf6TtDHSNlN7J79PUtMjK7RxHVCw23_JxeUMIoglRXvfcQCj2v6usSrpIU3_6-QnvNNREDAxgu5v0JsvJWnaAUKXCO31aY4fvQVVFFP6xeAKrkuBnXws0xyX7uaTLV1yW-0Iux5kN5tzCsWutM_PI3SA1dQlFAgMjlbYK1VPvDuEnw=w1320-h990-no?authuser=1',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 2,
      name: '가게2',
      mainImg:
        'https://lh3.googleusercontent.com/1nwmAGqHnWvC7sWwqaq-GV2kr0e9tnCkzlc1u_oPG0R29DUSVMAYCQcjEA8b01Hsaw5jedhuI7LCIG6baFWuyReLOw3NM68jD_00qG0tNky5l6WXhIkyDc-4SMBTn35UFUgfCj9uIZAsJjN7jeh1b_MnQzFRS5MIIzCbXXRmoDwgA__CWtV3b8bhHFmat1wRTYWSitsOk4G-hNvzzVTFuYk7eSF5tXK6zPd6BFXgVL7FwQrJma4lumuWMJrZo1zT0mZ3hEcxU_IZM8HcnahsBdo2qnGS66ZA9tyBIuBQKsJBtKXtrX2jcuaKog38pWELtsbIVdY69uT7Mw0lTbaabxjFav_MZddUx6VFC9IKpo0qPLiAHCURbcuOX9ydYrXUNlP5dZu5EwcA_YbroWSTRcsLocS9FTjsrvnA0INMrPEYWjPO1-GB3v0LkidfXlrUEFWB0enQAukgs-OuxxQwqixBIDz5Hq0-OHFdyuXDM-u9Gx5XacFXDoOjTmf5ImArDioYriHh86gvT6LiO8SreAQXQp9p_Xw2YQ-o6ENTGz6Gp8MmG_nozArqMdfw64QE3lmOfehZ8b1OHpLjAFa2pK7A96QAB_2hya17jziLxv8h_eIMZiMULf6TtDHSNlN7J79PUtMjK7RxHVCw23_JxeUMIoglRXvfcQCj2v6usSrpIU3_6-QnvNNREDAxgu5v0JsvJWnaAUKXCO31aY4fvQVVFFP6xeAKrkuBnXws0xyX7uaTLV1yW-0Iux5kN5tzCsWutM_PI3SA1dQlFAgMjlbYK1VPvDuEnw=w1320-h990-no?authuser=1',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 3,
      name: '가게3',
      mainImg:
        'https://lh3.googleusercontent.com/1nwmAGqHnWvC7sWwqaq-GV2kr0e9tnCkzlc1u_oPG0R29DUSVMAYCQcjEA8b01Hsaw5jedhuI7LCIG6baFWuyReLOw3NM68jD_00qG0tNky5l6WXhIkyDc-4SMBTn35UFUgfCj9uIZAsJjN7jeh1b_MnQzFRS5MIIzCbXXRmoDwgA__CWtV3b8bhHFmat1wRTYWSitsOk4G-hNvzzVTFuYk7eSF5tXK6zPd6BFXgVL7FwQrJma4lumuWMJrZo1zT0mZ3hEcxU_IZM8HcnahsBdo2qnGS66ZA9tyBIuBQKsJBtKXtrX2jcuaKog38pWELtsbIVdY69uT7Mw0lTbaabxjFav_MZddUx6VFC9IKpo0qPLiAHCURbcuOX9ydYrXUNlP5dZu5EwcA_YbroWSTRcsLocS9FTjsrvnA0INMrPEYWjPO1-GB3v0LkidfXlrUEFWB0enQAukgs-OuxxQwqixBIDz5Hq0-OHFdyuXDM-u9Gx5XacFXDoOjTmf5ImArDioYriHh86gvT6LiO8SreAQXQp9p_Xw2YQ-o6ENTGz6Gp8MmG_nozArqMdfw64QE3lmOfehZ8b1OHpLjAFa2pK7A96QAB_2hya17jziLxv8h_eIMZiMULf6TtDHSNlN7J79PUtMjK7RxHVCw23_JxeUMIoglRXvfcQCj2v6usSrpIU3_6-QnvNNREDAxgu5v0JsvJWnaAUKXCO31aY4fvQVVFFP6xeAKrkuBnXws0xyX7uaTLV1yW-0Iux5kN5tzCsWutM_PI3SA1dQlFAgMjlbYK1VPvDuEnw=w1320-h990-no?authuser=1',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 4,
      name: '가게4',
      mainImg:
        'https://lh3.googleusercontent.com/1nwmAGqHnWvC7sWwqaq-GV2kr0e9tnCkzlc1u_oPG0R29DUSVMAYCQcjEA8b01Hsaw5jedhuI7LCIG6baFWuyReLOw3NM68jD_00qG0tNky5l6WXhIkyDc-4SMBTn35UFUgfCj9uIZAsJjN7jeh1b_MnQzFRS5MIIzCbXXRmoDwgA__CWtV3b8bhHFmat1wRTYWSitsOk4G-hNvzzVTFuYk7eSF5tXK6zPd6BFXgVL7FwQrJma4lumuWMJrZo1zT0mZ3hEcxU_IZM8HcnahsBdo2qnGS66ZA9tyBIuBQKsJBtKXtrX2jcuaKog38pWELtsbIVdY69uT7Mw0lTbaabxjFav_MZddUx6VFC9IKpo0qPLiAHCURbcuOX9ydYrXUNlP5dZu5EwcA_YbroWSTRcsLocS9FTjsrvnA0INMrPEYWjPO1-GB3v0LkidfXlrUEFWB0enQAukgs-OuxxQwqixBIDz5Hq0-OHFdyuXDM-u9Gx5XacFXDoOjTmf5ImArDioYriHh86gvT6LiO8SreAQXQp9p_Xw2YQ-o6ENTGz6Gp8MmG_nozArqMdfw64QE3lmOfehZ8b1OHpLjAFa2pK7A96QAB_2hya17jziLxv8h_eIMZiMULf6TtDHSNlN7J79PUtMjK7RxHVCw23_JxeUMIoglRXvfcQCj2v6usSrpIU3_6-QnvNNREDAxgu5v0JsvJWnaAUKXCO31aY4fvQVVFFP6xeAKrkuBnXws0xyX7uaTLV1yW-0Iux5kN5tzCsWutM_PI3SA1dQlFAgMjlbYK1VPvDuEnw=w1320-h990-no?authuser=1',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 5,
      name: '가게5',
      mainImg:
        'https://lh3.googleusercontent.com/1nwmAGqHnWvC7sWwqaq-GV2kr0e9tnCkzlc1u_oPG0R29DUSVMAYCQcjEA8b01Hsaw5jedhuI7LCIG6baFWuyReLOw3NM68jD_00qG0tNky5l6WXhIkyDc-4SMBTn35UFUgfCj9uIZAsJjN7jeh1b_MnQzFRS5MIIzCbXXRmoDwgA__CWtV3b8bhHFmat1wRTYWSitsOk4G-hNvzzVTFuYk7eSF5tXK6zPd6BFXgVL7FwQrJma4lumuWMJrZo1zT0mZ3hEcxU_IZM8HcnahsBdo2qnGS66ZA9tyBIuBQKsJBtKXtrX2jcuaKog38pWELtsbIVdY69uT7Mw0lTbaabxjFav_MZddUx6VFC9IKpo0qPLiAHCURbcuOX9ydYrXUNlP5dZu5EwcA_YbroWSTRcsLocS9FTjsrvnA0INMrPEYWjPO1-GB3v0LkidfXlrUEFWB0enQAukgs-OuxxQwqixBIDz5Hq0-OHFdyuXDM-u9Gx5XacFXDoOjTmf5ImArDioYriHh86gvT6LiO8SreAQXQp9p_Xw2YQ-o6ENTGz6Gp8MmG_nozArqMdfw64QE3lmOfehZ8b1OHpLjAFa2pK7A96QAB_2hya17jziLxv8h_eIMZiMULf6TtDHSNlN7J79PUtMjK7RxHVCw23_JxeUMIoglRXvfcQCj2v6usSrpIU3_6-QnvNNREDAxgu5v0JsvJWnaAUKXCO31aY4fvQVVFFP6xeAKrkuBnXws0xyX7uaTLV1yW-0Iux5kN5tzCsWutM_PI3SA1dQlFAgMjlbYK1VPvDuEnw=w1320-h990-no?authuser=1',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
  ];
  return (
    <StoresWrapper>
      {StoreList.map(item => (
        <StoreCard
          key={item.id}
          id={item.id}
          mainImg={item.mainImg}
          introduce={item.introduce}
          name={item.name}
          owner={item.owner}
          address={item.address}
          phone={item.phone}
        ></StoreCard>
      ))}
    </StoresWrapper>
  );
};

export default Stores;
