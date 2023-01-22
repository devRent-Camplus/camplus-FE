/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      mainColor_yellow: '#FFB600',
      subColor_grey: '#D9D9D9',
      backgroudColor_white: '#F5F5F5',
      fontColor_black: '#000000',
      fontColor_grey: '#505050',
      fontColor_white: '#FFFFFF',
      fontColor_red: '#F60001',
      categoryBtnColor_grey: '#F0F0F0',
    },
    borderWidth: {
      border_md: '3px',
    },
    width: {
      logoWidth: '217px',
      inputItemWidth: '920px',
      mainBtnWidth: '450px',
      categoryBtnWidth: '112px',
      bottomNavBtnImgWidth: '35px',
    },
    height: {
      height: '100vh',
      logoHeight: '35px',
      inputItemHeight: '93px',
      listItemHeight: '131px',
      postInputItemHeight: '72px',
      postInputItemContentHeight: '265px',
      mainBtnHeight: '75px',
      categoryBtnHeight: '45px',
      headerHeight: '10vh',
      contentHeight: '65vh',
      homeContentHeight: '67vh',
      categoryBtnListHeight: '8vh',
      bottomNavBtnHeight: '6vh',
      bottomNavBtnImgHeight: '35px',
    },
    borderRadius: {
      borderRadius_sm: '20px',
      borderRadius_md: '40px',
      borderRadius_lg: '79px',
    },
    fontSize: {
      fontSize_sm: '14px',
      fontSize_md: '18px',
      fontSize_lg: '22px',
    },
    extend: {},
  },
  plugins: [],
};
