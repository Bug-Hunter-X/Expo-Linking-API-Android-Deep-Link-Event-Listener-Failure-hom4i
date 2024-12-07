/*
 * deepLinkBug.js
 */
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const deepLinkBug = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleDeepLink = (url) => {
      console.log('Deep Link Received:', url);
      // Process the URL and handle navigation accordingly
    };

    const unsubscribe = Linking.addEventListener('url', handleDeepLink);

    Linking.getInitialURL().then(url => {
      if (url) {
        setInitialUrl(url);
        handleDeepLink(url);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>Deep Link Bug Example</Text>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
};
export default deepLinkBug;

/*
* deepLinkSolution.js
*/
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const deepLinkSolution = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleDeepLink = (event) => {
      console.log('Deep Link Received:', event.url);
      // Process the URL and handle navigation accordingly
    };

    const checkInitialURL = async () => {
        const url = await Linking.getInitialURL();
        if (url) {
          handleDeepLink({ url });
        }
    }

    const unsubscribe = Linking.addEventListener('url', handleDeepLink);
    checkInitialURL();

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>Deep Link Solution Example</Text>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
};
export default deepLinkSolution;