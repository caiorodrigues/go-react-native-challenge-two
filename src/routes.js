import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';
import { colors } from '~/styles';

const Routes = () => createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
      Issues,
    },
    {
      initialRouteName: 'Repositories',
    },
  ),
);

export default Routes;
