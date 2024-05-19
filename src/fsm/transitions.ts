import { Transition } from './orderFSM';

export const transitions: Transition[] = [
  { from: 'browsing', to: 'selectingItems', event: 'ADD_ITEM' },
  { from: 'selectingItems', to: 'reviewingOrder', event: 'PROCEED_TO_CHECKOUT' },
  { from: 'reviewingOrder', to: 'checkout', event: 'CONFIRM_ORDER' },
  { from: 'checkout', to: 'payment', event: 'MAKE_PAYMENT' },
  { from: 'payment', to: 'orderConfirmed', event: 'PAYMENT_SUCCESS' },
  { from: 'payment', to: 'checkout', event: 'PAYMENT_FAILURE' },
  { from: 'selectingItems', to: 'orderCancelled', event: 'CANCEL_ORDER' },
  { from: 'reviewingOrder', to: 'orderCancelled', event: 'CANCEL_ORDER' },
  { from: 'checkout', to: 'orderCancelled', event: 'CANCEL_ORDER' },
  { from: 'payment', to: 'orderCancelled', event: 'CANCEL_ORDER' },
];