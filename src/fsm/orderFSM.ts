type State = 'browsing' | 'selectingItems' | 'reviewingOrder' | 'checkout' | 'payment' | 'orderConfirmed' | 'orderCancelled';
type Event = 'ADD_ITEM' | 'REMOVE_ITEM' | 'PROCEED_TO_CHECKOUT' | 'CONFIRM_ORDER' | 'MAKE_PAYMENT' | 'PAYMENT_SUCCESS' | 'PAYMENT_FAILURE' | 'CANCEL_ORDER';

export interface Transition {
  from: State;
  to: State;
  event: Event;
}

class OrderFSM {
  private state: State;
  private transitions: Transition[];

  constructor(initialState: State, transitions: Transition[]) {
    this.state = initialState;
    this.transitions = transitions;
  }

  getState(): State {
    return this.state;
  }

  dispatch(event: Event): void {
    const transition = this.transitions.find(
      (t) => t.from === this.state && t.event === event
    );

    if (transition) {
      this.state = transition.to;
    } else {
      console.warn(`No transition for event "${event}" from state "${this.state}"`);
    }
  }
}

export default OrderFSM;