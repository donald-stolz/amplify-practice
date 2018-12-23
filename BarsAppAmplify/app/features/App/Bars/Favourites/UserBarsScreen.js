// @flow
import React, { PureComponent } from 'react';
import {
  View, Text, StyleSheet, ActivityIndicator,
} from 'react-native';
import { Auth } from 'aws-amplify';

// Components
import UserBarsList from './containers/UserBarsList';

// Config
import * as COLORS from '../../../../config/colors';

// Types
type State = {
  userId: string,
  loading: boolean,
};

export default class UserBarsScreen extends PureComponent<void, State> {
  state = {
    userId: '',
    loading: false,
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    try {
      this.setState({ loading: true });
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = await currentUser.signInUserSession.accessToken.payload.sub;
      this.setState({ userId, loading: false });
      console.log(userId);
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  };

  render() {
    const { userId, loading } = this.state;
    const { navigation } = this.props;

    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator color={COLORS.PRIMARY_TEXT_COLOR} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.refreshWrapper}>
          <Text style={styles.refreshLabel}>PULL TO REFRESH</Text>
        </View>
        <UserBarsList userId={userId} barId="" navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TEXT_PRIMARY_COLOR,
  },
  loading: {
    flex: 1,
    backgroundColor: COLORS.TEXT_PRIMARY_COLOR,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  refreshWrapper: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshLabel: {
    fontSize: 8,
    color: COLORS.SECONDARY_TEXT_COLOR,
  },
});
