# Quick Start

## React Native

### 1. Create new project with Amplify

		$ react-native init <app_name>
		$ cd <app_name>
		$ yarn add aws-amplify
		$ yarn add aws-amplify-react-native

### 2. Set up the AWS Backend

		$ amplify init
	
	**Create AWS Backend resources**

		$ amplify add <category_name>

		| Category      |
		| ------------- |
		| analytics     |
		| api           |
		| auth          |
		| function      |
		| hosting       |
		| storage       |
		| notifications |
	
Create The AWS Backend resource and update the _aws-export.js_ file

### 3. Integrate AWS Resources

#### Example with _analaytics_
		$ amplify add analytics
		$ amylify push

		// App.js
		import React from 'react';
		import { Linking, Button, StyleSheet, Text, View } from 'react-native';
		import Auth from '@aws-amplify/auth';
		import Analytics from '@aws-amplify/analytics';

		import awsconfig from './aws-exports';

		// retrieve temporary AWS credentials and sign requests
		Auth.configure(awsconfig);
		// send analytics events to Amazon Pinpoint
		Analytics.configure(awsconfig);

		export default class App extends React.Component {
			constructor(props) {
			super(props);
			this.handleAnalyticsClick = this.handleAnalyticsClick.bind(this);
			this.state = {resultHtml: <Text></Text>, eventsSent: 0};
			}

			handleAnalyticsClick() {
			Analytics.record('AWS Amplify Tutorial Event')
				.then( (evt) => {
					const url = 'https://'+awsconfig.aws_project_region+'.console.aws.amazon.com/pinpoint/home/?region='+awsconfig.aws_project_region+'#/apps/'+awsconfig.aws_mobile_analytics_app_id+'/analytics/events';
					let result = (
					<View>
						<Text>Event Submitted.</Text>
						<Text>Events sent: {++this.state.eventsSent}</Text>
						<Text style={styles.link} onPress={() => Linking.openURL(url)}>
						View Events on the Amazon Pinpoint Console
						</Text>
					</View>
					);
					this.setState({
						'resultHtml': result
					});
				});
			};

			render() {
			return (
				<View style={styles.container}>
				<Text>Welcome to your React Native App with Amplify!</Text>
				<Button title="Generate Analytics Event" onPress={this.handleAnalyticsClick} />
				{this.state.resultHtml}
				</View>
			);
			}
		}

		const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
		link: {
			color: 'blue'
		}
		});