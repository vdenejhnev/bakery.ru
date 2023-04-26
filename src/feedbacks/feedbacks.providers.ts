import { FeedbackOrder } from "./models/feedbacks-order.model";
import { FeedbackProduct } from "./models/feedbacks-product.model";


export const feedbacksProviders = [
  {
    provide: 'FEEDBACKS_ORDER_REPOSITORY',
    useValue: FeedbackOrder,
  },
  {
    provide: 'FEEDBACKS_PRODUCT_REPOSITORY',
    useValue: FeedbackProduct,
  },
];