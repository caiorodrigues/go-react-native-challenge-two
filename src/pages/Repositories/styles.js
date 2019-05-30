import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,

  },

  repositoryInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.basePadding,

  },

  repositoryInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },

  repositoryInputButton: {

  },

  repositoryInputIcon: {

  },
});

export default styles;
