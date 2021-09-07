import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const DashboardButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export const SearchButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '3%'
});


// 일반 방식 -> not use material-ui
// const CustomButton = styled(Button)`
//   background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
//   border: 0;
//   border-radius: 3px;
//   box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
//   color: white;
//   height: 48px;
//   padding: 0 30px;
//   ${props => props.search && css`

//     background: blue;
//     color: red;
// `}
// `;
