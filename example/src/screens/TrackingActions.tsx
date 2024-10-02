import React from 'react';
import PiwikProSdk from '@piwikpro/react-native-piwik-pro-sdk';
import { Button, ScrollViewContainer } from '../components';
import { eventNumSelector, setError, setEventMessage } from '../store/appSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function TrackingActions() {
  const eventNum = useAppSelector(eventNumSelector);
  const dispatch = useAppDispatch();
  const successMessage = (message: string) =>
    dispatch(setEventMessage(message));

  const customDimensions = {
    1: 'beta',
    2: 'gamma',
  };
  const visitCustomVariables = { 4: { name: 'food', value: 'pizza' } };
  const screenCustomVariables = { 5: { name: 'drink', value: 'water' } };

  const trackScreen = async () => {
    try {
      await PiwikProSdk.trackScreen(`your_activity_path${eventNum}`, {
        screenCustomVariables,
      });
      successMessage('Track screen');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackScreenWithCustomDimensions = async () => {
    const options: TrackScreenOptions = {
      title: 'customDimensions',
      customDimensions,
    };

    try {
      await PiwikProSdk.trackScreen(`your_activity_path${eventNum}`, options);
      successMessage('Track screen');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackScreenWithCustomVariables = async () => {
    const options: TrackScreenOptions = {
      title: 'customVariables',
      visitCustomVariables,
    };

    try {
      await PiwikProSdk.trackScreen(`your_activity_path${eventNum}`, options);
      successMessage('Track screen');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackCustomEvent = async () => {
    const options: TrackCustomEventOptions = {
      name: 'customEvent',
      path: 'some/path',
      value: 1.5,
      visitCustomVariables,
      customDimensions,
    };

    try {
      await PiwikProSdk.trackCustomEvent(
        `custom_event_${eventNum}`,
        'custom_event_action',
        options
      );
      successMessage('Track custom event');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackException = async () => {
    const options: CommonEventOptions = {
      visitCustomVariables,
    };

    try {
      await PiwikProSdk.trackException(`exception_${eventNum}`, options);
      successMessage('Track exception');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackSocialInteraction = async () => {
    const options: TrackSocialInteractionOptions = {
      visitCustomVariables,
      // customDimensions,
    };

    try {
      await PiwikProSdk.trackSocialInteraction(
        `like_${eventNum}`,
        'Facebook',
        options
      );
      successMessage('Track social interaction');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackDownload = async () => {
    const options: CommonEventOptions = {
      visitCustomVariables,
      // customDimensions,
    };

    try {
      await PiwikProSdk.trackDownload(
        `http://your.server.com/bonusmap${eventNum}.zip`,
        options
      );
      successMessage('Track download');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackOutlink = async () => {
    const options: CommonEventOptions = {
      visitCustomVariables,
      // customDimensions,
    };

    try {
      await PiwikProSdk.trackOutlink(
        `http://your.server.com/bonusmap${eventNum}.zip`,
        options
      );
      successMessage('Track outlink');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackSearch = async () => {
    const options: TrackSearchOptions = {
      visitCustomVariables,
      category: `Movies`,
      count: 3,
      // customDimensions,
    };

    try {
      await PiwikProSdk.trackSearch(`Space${eventNum}`, options);
      successMessage('Track search');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackImpression = async () => {
    const options: TrackImpressionOptions = {
      visitCustomVariables,
      piece: 'banner',
      target: 'https://www.dn.se/',
      // customDimensions,
    };

    try {
      await PiwikProSdk.trackImpression(
        `Some content impression ${eventNum}`,
        options
      );
      successMessage('Track content impression');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackInteraction = async () => {
    const options: TrackInteractionOptions = {
      visitCustomVariables,
      piece: 'banner',
      target: 'https://www.dn.se/',
      customDimensions,
    };

    try {
      await PiwikProSdk.trackInteraction(
        `Some content interaction ${eventNum}`,
        'click',
        options
      );
      successMessage('Track content interaction');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackGoal = async () => {
    const options: TrackGoalOptions = {
      visitCustomVariables,
      revenue: 30,
      // customDimensions,
    };

    try {
      await PiwikProSdk.trackGoal(
        '27ecc5e3-8ae0-40c3-964b-5bd8ee3da059',
        options
      );
      successMessage('Track goal');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackEcommerce = async () => {
    const options: TrackEcommerceOptions = {
      visitCustomVariables,
      discount: 500,
      shipping: 3000,
      subTotal: 1000,
      tax: 2000,
      items: [
        {
          sku: '0123456789012',
          category: "Men's T-shirts",
          name: 'Polo T-shirt',
          price: 3000,
          quantity: 2,
        },
      ],
      customDimensions,
    };

    try {
      await PiwikProSdk.trackEcommerce(
        `Transaction_${eventNum}`,
        100000,
        options
      );
      successMessage('Track ecommerce transaction');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const trackCampaign = async () => {
    try {
      await PiwikProSdk.trackCampaign(
        `http://example.org/offer.html?pk_campaign=Email-SummerDeals&pk_keyword=LearnMore${eventNum}`
      );
      successMessage('Track campaign');
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  return (
    <ScrollViewContainer>
      <Button onPress={trackScreen} text="Track screen" />

      <Button
        onPress={trackScreenWithCustomDimensions}
        text="Track screen with custom dimensions"
      />

      <Button
        onPress={trackScreenWithCustomVariables}
        text="Track screen with custom variables"
      />

      <Button onPress={trackCustomEvent} text="Track custom event" />

      <Button onPress={trackException} text="Track exception" />

      <Button
        onPress={trackSocialInteraction}
        text="Track social interaction"
      />

      <Button onPress={trackDownload} text="Track download" />

      <Button onPress={trackOutlink} text="Track outlink" />

      <Button onPress={trackSearch} text="Track search" />

      <Button onPress={trackImpression} text="Track content impression" />

      <Button onPress={trackInteraction} text="Track content interaction" />

      <Button onPress={trackGoal} text="Track goal" />

      <Button onPress={trackEcommerce} text="Track ecmommerce transaction" />

      <Button onPress={trackCampaign} text="Track campaign" />
    </ScrollViewContainer>
  );
}
