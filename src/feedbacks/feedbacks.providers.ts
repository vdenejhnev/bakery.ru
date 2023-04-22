import { FeedbacksOrders } from "./models/feedbacks-order.model";
import { FeedbacksProducts } from "./models/feedbacks-product.model";


export const feedbacksProviders = [
  {
    provide: 'FEEDBACKS_ORDER_REPOSITORY',
    useValue: FeedbacksOrders,
  },
  {
    provide: 'FEEDBACKS_PRODUCT_REPOSITORY',
    useValue: FeedbacksProducts,
  },
];